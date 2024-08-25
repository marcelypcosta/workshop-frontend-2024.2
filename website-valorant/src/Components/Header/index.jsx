import { useState } from "react";
import {
  DesktopButton,
  ContainerHeader,
  DesktopMenu,
  ImageLogo,
  ItemDesktopMenu,
  ItemMobileMenu,
  ItensDesktopMenu,
  ItensMobileMenu,
  MobileMenu,
  MobileButton,
  Separator,
} from "../../assets/css/header";
import Logo from "../../assets/img/logo.png";
import { MenuIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <ContainerHeader>
      <ImageLogo src={Logo} alt="Logo" />
      <DesktopMenu>
        <ItensDesktopMenu>
          <Link to="/">
            <ItemDesktopMenu active={location.pathname === "/"}>
              Home
            </ItemDesktopMenu>
          </Link>
          <Separator />
          <Link to="/agentes">
            <ItemDesktopMenu active={location.pathname === "/agentes"}>
              Agentes
            </ItemDesktopMenu>
          </Link>
          <Link to="/pacotes">
            <ItemDesktopMenu active={location.pathname === "/pacotes"}>
              Pacotes
            </ItemDesktopMenu>
          </Link>
          <Link to="/mapas">
            <ItemDesktopMenu active={location.pathname === "/mapas"}>
              Mapas
            </ItemDesktopMenu>
          </Link>
        </ItensDesktopMenu>
      </DesktopMenu>
      <DesktopButton onClick={openMenu}>
        <MenuIcon size="32px" color="#fff" />
      </DesktopButton>
      {menuIsOpen && (
        <MobileMenu>
          <MobileButton onClick={closeMenu}>
            <X size="32px" color="#fff" />
          </MobileButton>
          <ItensMobileMenu>
            <Link to="/">
              <ItemMobileMenu active={location.pathname === "/"}>
                Home
              </ItemMobileMenu>
            </Link>
            <Link to="/agentes">
              <ItemMobileMenu active={location.pathname === "/agentes"}>
                Agentes
              </ItemMobileMenu>
            </Link>
            <Link to="/pacotes">
              <ItemMobileMenu active={location.pathname === "/pacotes"}>
                Pacotes
              </ItemMobileMenu>
            </Link>
            <Link to="/mapas">
              <ItemMobileMenu active={location.pathname === "/mapas"}>
                Mapas
              </ItemMobileMenu>
            </Link>
          </ItensMobileMenu>
        </MobileMenu>
      )}
    </ContainerHeader>
  );
}
