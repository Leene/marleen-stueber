import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../../constants";
import Screen1 from "../../img/EmmetGameScreenshots/startArea.png";
import Screen2 from "../../img/EmmetGameScreenshots/ingameView.png";
import Screen3 from "../../img/EmmetGameScreenshots/gameOverDialog.png";
import Screen4 from "../../img/EmmetGameScreenshots/highscore2Tabelle.png";

export default function EmmetTypingGame() {
  return (
    <>
      <h4>Emmet Typing Game</h4>
      <DescriptionDiv>
        <P> Abschlussprojekt (Web Developer Bootcamp Januar - März 2020)</P>
        <P>
          Verwendet wurde React.js mit funktionaler Programmierung, Styled
          Components, Reach Router, Props, State Hooks und Firebase
        </P>
      </DescriptionDiv>

      <URLBtnDiv>
        <URLBtn
          title="Zur Demo von Emmet Typing Game"
          href="https://Leene.github.io/emmet-typing-game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </URLBtn>
        <URLBtn
          title="Zum Github-Repository von Emmet Typing Game"
          href="https://github.com/Leene/emmet-typing-game/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Repository
        </URLBtn>
      </URLBtnDiv>
      <Screens>
        <Figure>
          <figcaption>Startbereich</figcaption>
          <IMG src={Screen1} />
        </Figure>
        <Figure>
          <figcaption>Im Spiel</figcaption>
          <IMG src={Screen2} />
        </Figure>
        <Figure>
          <figcaption>Ende des Spiels</figcaption>
          <IMG src={Screen3} />
        </Figure>
        <Figure>
          <figcaption>Punktetabelle</figcaption>
          <IMG src={Screen4} />
        </Figure>
      </Screens>
      <SmallScreens>
        <Figure>
          <figcaption>Startbereich</figcaption>
          <IMG src={Screen1} />
        </Figure>
        <Figure>
          <figcaption>Im Spiel</figcaption>
          <IMG src={Screen2} />
        </Figure>
        <Figure>
          <figcaption>Ende des Spiels</figcaption>
          <IMG src={Screen3} />
        </Figure>
        <Figure>
          <figcaption>Punktetabelle</figcaption>
          <IMG src={Screen4} />
        </Figure>
      </SmallScreens>
    </>
  );
}

const URLBtnDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const P = styled.p`
  max-width: 800px;
  padding: 0 20px;
`;
const URLBtn = styled.a`
  border: none;
  background-color: rgba(${COLORS.lightText}, 0.3);
  text-transform: uppercase;
  color: rgb(${COLORS.lightText});
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;

  box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);
  margin: auto 20px;
  padding: 10px;

  &:hover {
    background-color: ${COLORS.headline};
    transition: 0.3s;
  }
`;

const Screens = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  ${VIEWPORT.small} {
    display: none;
  }

  ${VIEWPORT.medium} {
    display: none;
  }

  ${VIEWPORT.large} {
  }
`;

const SmallScreens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    display: none;
  }
`;

const Figure = styled.figure`
  margin: 20px 0;
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }

  & figcaption {
    ${VIEWPORT.small} {
      margin-bottom: 20px;
    }

    ${VIEWPORT.medium} {
    }

    ${VIEWPORT.large} {
    }
  }
`;

const IMG = styled.img`
  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
  height: 500px;
  margin: 20px 5px 0 5px;

  ${VIEWPORT.small} {
    height: auto;
    width: 90vw;
    margin: 0;
  }

  ${VIEWPORT.medium} {
    height: auto;
    width: 55vw;
  }

  ${VIEWPORT.large} {
  }
`;
