// Library
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import axios from "axios";

// Hooks
import { useEffect, useState } from "react";

// Styles
import { Container, Tittle } from "../../assets/css/pages";
import "../../assets/css/styleSwiper.css"

// Components
import { Card } from "../../Components/Card";

import { API_BASE_URL } from "../../api";

export function Bundles() {
  const [bundles, setBundles] = useState([]);
  const [error, setError] = useState(null);

  const loadBundles = async () => {
    try {
      const route = `${API_BASE_URL}/bundles?language=pt-BR`;
      const response = await axios.get(route);

      setBundles(response.data.data);
    } catch (error) {
      console.error("Error fetching bundles:", error);
      setError("Failed to load bundles.");
    }
  };

  useEffect(() => {
    loadBundles();
  }, []);

  const BundlesSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container backgroundColor="#ECEDEE">
      <Tittle color="#22292E">- Pacotes -</Tittle>
      {error ? (
        alert(error)
      ) : (
        <Slider settings={BundlesSettings}>
          {bundles.map((bundle) => (
            <SwiperSlide key={bundle.uuid}>
              <Card
                imagem={bundle.displayIcon}
                title={bundle.displayName}
                type="bundle"
              />
            </SwiperSlide>
          ))}
        </Slider>
      )}
    </Container>
  );
}
