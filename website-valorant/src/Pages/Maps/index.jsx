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

export function Maps() {
  const [maps, setMaps] = useState([]);
  const [error, setError] = useState(null);

  const loadMaps = async () => {
    try {
      const route = `${API_BASE_URL}/maps?language=pt-BR`;
      const response = await axios.get(route);

      // Tratamento defido inconsistência nos dados da api
      const filteredMaps = response.data.data.filter((map) => map.displayIcon);

      setMaps(filteredMaps);
    } catch (error) {
      console.error("Error fetching maps:", error);
      setError("Failed to load maps.");
    }
  };

  useEffect(() => {
    loadMaps();
  }, []);

  const MapsSettings = {
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
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container backgroundColor="#22292E">
      <Tittle color="#ECEDEE">- Mapas -</Tittle>
      {error ? (
        alert(error)
      ) : (
        <Slider settings={MapsSettings}>
          {maps.map((map) => (
            <SwiperSlide key={map.uuid}>
              <Card
                type="maps"
                imageCard={map.splash}
                name={map.displayName}
                coordinates={map.coordinates}
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}
    </Container>
  );
}
