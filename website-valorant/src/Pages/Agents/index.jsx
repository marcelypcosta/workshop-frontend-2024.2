// Library
import axios from "axios";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";

// Hooks
import { useEffect, useState } from "react";

// Styles
import { Container, Input, NoResults, Tittle } from "../../assets/css/pages";

// Components
import { Card } from "../../Components/Card";

import { API_BASE_URL } from "../../api";

export function Agents() {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const loadAgents = async () => {
    try {
      const route = `${API_BASE_URL}/agents?language=pt-BR`;
      const response = await axios.get(route);

      const filtered = response.data.data.filter(
        (agent) =>
          agent.fullPortrait &&
          agent.abilities &&
          agent.abilities.every((ability) => ability.displayIcon)
      );

      setAgents(filtered);
      setFilteredAgents(filtered);
    } catch (error) {
      setError(`Failed to load maps. ${error}`);
    }
  };

  useEffect(() => {
    loadAgents();
  }, []);

  useEffect(() => {
    const filtered = agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredAgents(filtered);

    if (filtered.length === 0 && searchTerm) {
      setNoResultsMessage("Agente não encontrado =)");
    } else {
      setNoResultsMessage("");
    }
  }, [searchTerm, agents]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const AgentsSettings = {
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: true,
    autoplay: {
      delay: 2000,
    },
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container backgroundColor="#DD4754">
      <Tittle color="#ECEDEE">- Agentes -</Tittle>
      <Input
        type="text"
        placeholder="Buscar agentes..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {noResultsMessage && <NoResults>{noResultsMessage}</NoResults>}
      {error ? (
        alert(error)
      ) : (
        <Slider settings={AgentsSettings}>
          {filteredAgents.map((agent) => (
            <SwiperSlide key={agent.uuid}>
              <Card
                type="agent"
                imageCard={agent.fullPortrait}
                imageModal={agent.displayIcon}
                name={agent.displayName}
                role={agent.role.displayName}
                description={agent.description}
                abilities={agent.abilities.map((ability) => ({
                  name: ability.displayName,
                  icon: ability.displayIcon,
                }))}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}
    </Container>
  );
}
