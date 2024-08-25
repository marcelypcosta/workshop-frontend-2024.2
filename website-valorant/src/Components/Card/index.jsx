import PropTypes from "prop-types";
import { CardContainer, DataContainer, Image } from "../../assets/css/card"; 

export function Card({ imagem, title, subtitle, type }) {
  return (
    <CardContainer type={type}>
      <Image src={imagem} alt={`Imagem do ${type}`} />
      <DataContainer>
        {subtitle && <span>{subtitle}</span>}
        <p>{title}</p>
      </DataContainer>
    </CardContainer>
  );
}

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(["agent", "bundle", "map"]).isRequired,
};
