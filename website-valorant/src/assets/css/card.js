import { Box, Modal } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 12px;
  background-color: #ECEDEE; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  margin-bottom: 32px;
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  
  &:hover {
    cursor: pointer;
    transform: translateY(-5px); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  display: block; 
  object-fit: cover;
`;

export const DataContainer = styled.div`
  background-color: #22292E;
  display: flex;
  flex-direction: column; 
  gap: 8px;
  padding: 16px; 
  color: #ECEDEE;
  
  p {
    font-size: 20px; 
    font-weight: 700; 
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    margin: 0; 
  }

  span {
    font-size: 14px; 
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    margin: 0; 
  }
`;

// Modal do Agente

export const StyleModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyleBox = styled(Box)`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  background-color: #22292E;
  padding: 24px;
  border-radius: 8px;
  outline: none;
  font-family: 'Inter', sans-serif;

  @media (max-width: 940px){
    width: 300px;

  }
`

export const DadosAgent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img{
    width: 200px;
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 940px){
    display: flex;
    flex-direction: column;

    img{
      width: 150px;
    }

    div{
      display: flex;
      gap: 12px;
    }
  }
`

export const NameAgent = styled.p`
  font-size: 36px;
  font-weight: bolder;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  text-transform: uppercase;

  span{
    font-size: 16px;
    font-weight: 400;
  }
`

export const TittleAbilities = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
`

export const AbilitiesAgent = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  div{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 12px;
    border-radius: 4px;
    background-color: #dd4754;
  }

  img{
    width: 32px;
  }

  p{
    font-size: 14px;
  }

  @media (max-width: 940px){
    display: grid;
    grid-template-columns: repeat(1, auto);

    div{
      width: 80%;
      height: 32px;
      flex-direction: row;
      margin: 0 auto;
    }
  }
`

export const DescriptionAgent = styled.p`
  line-height: 24px;
  text-align: justify;
`
