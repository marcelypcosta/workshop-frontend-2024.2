import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px 20px;
  background-color: #22292E;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ImageLogo = styled.img`
  width: 250px;
`;

export const DesktopMenu = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItensDesktopMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'Inter', sans-serif;
`;

export const ItemDesktopMenu = styled.li`
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ active }) => (active ? "#DD4754" : "#fff")};
  transition: color 0.3s ease;

  &:hover {
    color: #DD4754;
    cursor: pointer;
  }
`;

export const DesktopButton = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  background: #22292e;
  padding: 20px;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
`;

export const ItensMobileMenu = styled.ul`
  font-family: 'Inter', sans-serif;
`;

export const ItemMobileMenu = styled.li`
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ active }) => (active ? "#DD4754" : "#fff")};
  padding: 15px 0;
  border-bottom: 1px solid #444;
  transition: color 0.3s ease;

  &:hover {
    color: #DD4754;
    cursor: pointer;
  }
`;

export const MobileButton = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Separator = styled.hr`
  height: 10px;
`