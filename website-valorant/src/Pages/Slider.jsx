import { Swiper } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Slider({ settings, children }) {
  return (
    <Swiper modules={[Navigation]} {...settings}>
      {children}
    </Swiper>
  );
}

Slider.propTypes = {
  settings: PropTypes.shape({
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    autoplay: PropTypes.shape({
      delay: PropTypes.number,
    }),
    navigation: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
