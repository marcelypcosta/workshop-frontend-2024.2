import {
  Button,
  Container,
  ContainerSections,
  Images,
  SectionAgents,
  SectionBundles,
  SectionMaps,
  Sobre,
  Tittle,
} from "../../assets/css/home";
import { Link } from "react-router-dom";

import Agentes from "../../assets/img/agentes.png";
import Pacotes from "../../assets/img/pacotes.png";
import Mapas from "../../assets/img/mapas.jpg";

export function Home() {
  return (
    <Container>
      <SectionAgents>
        <ContainerSections>
          <Images src={Agentes} alt="Agentes do Valorant" />
          <div>
            <Tittle>Agentes</Tittle>
            <Sobre>
              Em Valorant, os agentes são os personagens jogáveis, cada um com
              habilidades únicas que moldam a estratégia do jogo. Com classes
              distintas, como Duelistas, Sentinelas, Controladores e
              Iniciadores, os agentes oferecem uma variedade de estilos de jogo.
              Os Duelistas são agressivos e focados em abates, enquanto os
              Sentinelas protegem áreas e apoiam a equipe. Os Controladores
              manipulam o campo de batalha com fumaças e barreiras, e os
              Iniciadores quebram defesas com habilidades de reconhecimento e
              controle. Escolher o agente certo é crucial para montar uma equipe
              equilibrada e maximizar o potencial de vitória.
            </Sobre>
            <Link to="/agentes">
              <Button>Conheça os agentes</Button>
            </Link>
          </div>
        </ContainerSections>
      </SectionAgents>
      <SectionBundles>
        <ContainerSections>
          <Images
            className="imagePacoteMobile"
            src={Pacotes}
            alt="Agentes do Valorant"
          />
          <div>
            <Tittle>Pacotes</Tittle>
            <Sobre>
              Os pacotes em Valorant são conjuntos temáticos de skins e outros
              itens cosméticos, permitindo que os jogadores personalizem suas
              armas e agentes. Cada pacote geralmente inclui skins para várias
              armas, um acessório de faca, cartões de jogador, sprays e
              amuletos. Além de melhorar a estética do jogo, esses pacotes
              muitas vezes têm animações e efeitos sonoros especiais que tornam
              a experiência de jogo ainda mais imersiva. Adquiridos na loja do
              jogo, os pacotes são lançados periodicamente, trazendo novos temas
              e estilos para os jogadores expressarem suas personalidades no
              campo de batalha.
            </Sobre>
            <Link to="/pacotes">
              <Button>Conheça os pacotes</Button>
            </Link>
          </div>
          <Images
            className="imagePacoteDasktop"
            src={Pacotes}
            alt="Agentes do Valorant"
          />
        </ContainerSections>
      </SectionBundles>
      <SectionMaps>
        <ContainerSections>
          <Images src={Mapas} alt="Agentes do Valorant" />
          <div>
            <Tittle>Mapas</Tittle>
            <Sobre>
              Os mapas de Valorant são cenários de batalha onde as partidas
              acontecem, cada um com uma arquitetura única e elementos
              estratégicos distintos. Cada mapa possui diferentes rotas, pontos
              de bomb, e áreas de emboscada que desafiam os jogadores a adaptar
              suas táticas de acordo com o terreno. Alguns mapas possuem
              mecânicas exclusivas, como portais e portas controláveis, que
              adicionam camadas adicionais de complexidade ao jogo. Dominar o
              conhecimento dos mapas é essencial para antecipar movimentos
              inimigos, escolher posicionamentos vantajosos e coordenar
              estratégias eficazes com a equipe.
            </Sobre>
            <Link to="/mapas">
              <Button>Conheça os mapas</Button>
            </Link>
          </div>
        </ContainerSections>
      </SectionMaps>
    </Container>
  );
}
