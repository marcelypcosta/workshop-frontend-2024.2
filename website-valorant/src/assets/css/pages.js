import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background-color: ${props => props.backgroundColor || "#FFFFFF"};

  @media (min-width: 768px) and (max-width: 1100px) {
  height: 100vh;
}
`;

export const Tittle = styled.h3`
  font-size: 64px;
  color: ${props => props.color || "#000000"};
  font-family: "New Amsterdam", sans-serif;
  margin-bottom: 32px;
  text-transform: uppercase;

  @media (max-width: 768px){
    text-align: center;
  }
`;

export const Input = styled.input`
  width: 50%;
  margin: 0 auto;
  padding: 12px;
  border-radius: 8px;
  outline: none;
  font-family: 'Inter', sans-serif;
  margin-bottom: 32px;
  background-color: #ECEDEE;

  @media (max-width: 768px){
    width: 93%;
  }
`

export const NoResults = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: 'Inter', sans-serif;
`
