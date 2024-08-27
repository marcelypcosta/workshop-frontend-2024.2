import PropTypes from "prop-types";
import {
  AbilitiesAgent,
  CardContainer,
  DadosAgent,
  DataContainer,
  DescriptionAgent,
  Image,
  NameAgent,
  StyleBox,
  StyleModal,
} from "../../assets/css/card";
import { useState } from "react";

export function Card({
  type,
  imageCard,
  imageModal,
  name,
  role,
  description,
  abilities,
  coordinates,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CardContainer onClick={handleOpen}>
        <Image src={imageCard} />
        <DataContainer>
          {type === "agent" && (
            <div>
              <span>{role}</span>
              <p>{name}</p>
            </div>
          )}
          {type === "bundle" && <p>{name}</p>}
          {type === "maps" && (
            <div>
              <p>
                {name} {coordinates}
              </p>
            </div>
          )}
        </DataContainer>
      </CardContainer>
      {type === "agent" && (
        <StyleModal open={open} onClose={handleClose}>
          <StyleBox>
            <DadosAgent>
              <img src={imageModal} alt={`Imagem do agente ${name}`} />
              <div>
                <NameAgent>
                  {name} <span>{role}</span>
                </NameAgent>
                <DescriptionAgent>{description}</DescriptionAgent>
              </div>
            </DadosAgent>
            <AbilitiesAgent>
              {abilities.map((ability, index) => (
                <div key={index}>
                  <img src={ability.icon} alt={"Ícone da habilidade"} />
                  <p>{ability.name}</p>
                </div>
              ))}
            </AbilitiesAgent>
          </StyleBox>
        </StyleModal>
      )}
    </>
  );
}

Card.propTypes = {
  imageCard: PropTypes.string.isRequired,
  imageModal: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  description: PropTypes.string,
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
  coordinates: PropTypes.string,
  type: PropTypes.oneOf(["agent", "bundle", "map"]),
};
