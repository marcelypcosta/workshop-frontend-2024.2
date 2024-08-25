import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Images = styled.img`
  width: 50%;

  @media (max-width: 940px) {
    width: 100%;
  }
`

export const Tittle = styled.h3`
  font-family: "New Amsterdam", sans-serif;
  font-size: 64px;
  font-weight: 500;
`

export const Sobre = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter', sans-serif;
  text-align: justify;
`

export const SectionAgents = styled.section`
  padding: 28px 20px;
  background-color: #DD4754;
  color: #FFF;
`

export const SectionBundles = styled.section`
  padding: 28px 20px;
  background-color: #ECEDEE;
`

export const SectionMaps = styled.section`
  padding: 28px 20px;
  background-color: #22292E;
  color: #FFF;

`
export const ContainerSections = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;

  div{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .imagePacoteMobile{
      display: none;
  }

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;

    .imagePacoteMobile{
      display: block;
  }

    .imagePacoteDasktop{
      display: none;
  }

  }
`

export const Button = styled.button`
  width: 50%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  background-color: #FFF;
  border: 2px #000 solid;
  padding: 12px;
  color: #22292E;

    &:hover {
    background-color: #22292E;
    color: #FFF;
    border-color: #FFF;
    transition: opacity 0.3s ease-in-out;
  }

  @media (max-width: 940px) {
    width: 100%;
  }
`
