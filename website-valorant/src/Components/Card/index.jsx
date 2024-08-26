import PropTypes from "prop-types";
import { CardContainer, DataContainer, Image } from "../../assets/css/card";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Card({ imagem, title, subtitle, type }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CardContainer type={type} onClick={handleOpen}>
        <Image src={imagem} alt={`Imagem do ${type}`} />
        <DataContainer>
          {subtitle && <span>{subtitle}</span>}
          <p>{title}</p>
        </DataContainer>
      </CardContainer>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {subtitle && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Função: {subtitle}
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
}

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(["agent", "bundle", "map"]).isRequired,
};
