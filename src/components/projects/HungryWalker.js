import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../../constants";
import Screen1HW from "../../img/hungryWalkerScreenShots/HungryWalkerScreenshot1.png";
import Screen2HW from "../../img/hungryWalkerScreenShots/HungryWalkerScreenshot2.png";
import Screen3HW from "../../img/hungryWalkerScreenShots/HungryWalkerScreenshot3.png";
import video from "../../img/hungryWalkerScreenShots/HungryWalkerApp.mp4";

export default function HungryWalker() {
  return (
    <>
      <h4>Hungry Walker</h4>
      <TextImageContainer>
        <VideoContainer>
          <Video controls>
            <source src={video} type="video/mp4" />
          </Video>
        </VideoContainer>
        <DescriptionDiv>
          <P>
            Ich habe mich in den letzten Wochen (Okt/Nov 2021) erstmalig mit
            App-Entwicklung befasst. Dabei ist diese Einkaufslisten-App mit
            React Native, Expo und SQLite entstanden. Man kann mit ihr mehrere
            Listen verwalten und den einzelnen Produkten ein bevorzugtes
            Einkaufsgeschäft zuordnen. Künftig soll die App Push-Notifications
            senden, wenn man sich in der Nähe eines Geschäfts befindet, bei dem
            man Einkaufswünsche hat und multiuserfähig werden.
          </P>
          <P>
            (SQLite wird für das Web nicht unterstützt, daher kann man die App
            scheinbar nicht vollständig über einen Expo-Link ausprobieren.
            Stattdessen gibt es das nebenstehende Video und einen Link zum
            Github-Repository)
          </P>

          <URLBtnDiv>
            <URLBtn
              title="Zum Github-Repository von Hungry Walker"
              href="https://github.com/Leene/hungry-walker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git-Repository
            </URLBtn>
          </URLBtnDiv>
        </DescriptionDiv>
      </TextImageContainer>

      <Screens>
        <Figure>
          <figcaption>Ansicht der Hauptliste</figcaption>
          <IMG src={Screen1HW} />
        </Figure>
        <Figure>
          <figcaption>Hauptliste mit modalem Dialog</figcaption>
          <IMG src={Screen2HW} />
        </Figure>
        <Figure>
          <figcaption>Ansicht der Produktliste</figcaption>
          <IMG src={Screen3HW} />
        </Figure>
      </Screens>
      <SmallScreens>
        <Figure>
          <figcaption>Startbereich</figcaption>
          <IMG src={Screen1HW} />
        </Figure>
        <Figure>
          <figcaption>Im Spiel</figcaption>
          <IMG src={Screen2HW} />
        </Figure>
        <Figure>
          <figcaption>Ende des Spiels</figcaption>
          <IMG src={Screen3HW} />
        </Figure>
      </SmallScreens>
    </>
  );
}

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${VIEWPORT.small} {
    flex-direction: column;
  }

  ${VIEWPORT.medium} {
    flex-direction: column;
  }

  ${VIEWPORT.large} {
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  max-width: 450px;
  padding: 0 20px;
  text-align: left;
`;

const VideoContainer = styled.div`
  border-radius: 35px;
  margin-left: 25px;
`;
const Video = styled.video`
  border-radius: 35px;
  height: 600px;
  max-width: 500px;
  ${VIEWPORT.small} {
    height: 600px;
  }

  ${VIEWPORT.medium} {
    height: 600px;
    margin-right: 10px;

  ${VIEWPORT.large} {
  }
`;

const URLBtnDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
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
  border-radius: 35px;

  ${VIEWPORT.small} {
    height: auto;
    width: 90vw;
    margin: 0;
    border-radius: 80px;
  }

  ${VIEWPORT.medium} {
    height: auto;
    width: 55vw;
    border-radius: 60px;
  }

  ${VIEWPORT.large} {
  }
`;
