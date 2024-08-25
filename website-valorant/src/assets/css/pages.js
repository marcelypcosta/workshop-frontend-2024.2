import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 32px;
  background-color: ${props => props.backgroundColor || "#FFFFFF"};
`;

export const Tittle = styled.h3`
  font-size: 64px;
  color: ${props => props.color || "#000000"};
  font-family: "New Amsterdam", sans-serif;
  margin-bottom: 32px;
  text-transform: uppercase;
  text-align: center;
`;
