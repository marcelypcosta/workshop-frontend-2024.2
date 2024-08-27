// Library
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import axios from "axios";

// Hooks
import { useEffect, useState } from "react";

// Styles
import { Container, Tittle } from "../../assets/css/pages";
import "../../assets/css/styleSwiper.css";

// Components
import { Card } from "../../Components/Card";

import { API_BASE_URL } from "../../api";

export function Agents() {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);

  const loadAgents = async () => {
    try {
      const route = `${API_BASE_URL}/agents?language=pt-BR`;
      const response = await axios.get(route);

      // Tratamento defido inconsistência nos dados da api
      const filteredAgents = response.data.data.filter(
        (agent) => agent.fullPortrait
      );

      setAgents(filteredAgents);
    } catch (error) {
      console.error("Error fetching agents:", error);
      setError("Failed to load agents.");
    }
  };

  useEffect(() => {
    loadAgents();
  }, []);

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
      {error ? (
        alert(error)
      ) : (
        <Slider settings={AgentsSettings}>
          {agents.map((agent) => (
            <SwiperSlide key={agent.uuid}>
              <Card
                type="agent"
                imageCard={agent.fullPortrait}
                imageModal={agent.displayIcon}
                name={agent.displayName}
                role={agent.role.displayName}
                description={agent.description}
                abilities={agent.abilities.map(ability => ({
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
