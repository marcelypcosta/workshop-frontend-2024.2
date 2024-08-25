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
  height: 500px;
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
