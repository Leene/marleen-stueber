import { COLORS, VIEWPORT } from "../constants";
import React from "react";
import styled, { keyframes } from "styled-components";
import meinAntlitz from "../img/marleen_stueber_quadrat.png";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Contact2 from "./Contact2";

export default function Header() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <HEADER>
        <Profil>
          {/* Profil */}
          <DIV>
            <TitleDiv>
              <H1>Marleen Stüber</H1>
              <H2>Junior Web Developer</H2>
            </TitleDiv>
            <ImgCenter src={meinAntlitz} />
            <P>
              Ich bin ehemalige Studentin der Medieninformatik und seit März
              2020 Absolventin des Web Developer Bootcamps der neuefische GmbH.
              Aktuell suche ich eine Festanstellung als Junior Web Developer.
            </P>
            <Contact2 />
          </DIV>

          <ImgLeft src={meinAntlitz} />
        </Profil>

        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path fill="#09ac86" d="M0,124L1440,32L1440,220L0,220Z"></path>
        </Svg>
        <Svg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#46515B" d="M0,84L1440,188L1440,420L0,420Z"></path>
        </Svg2>
      </HEADER>
    </>
  );
}

//////////keyframe declarations///////////////
const textFadeAndCompress = keyframes`
from {
opacity: 0;
transform: translateX(-30px);
letter-spacing: 5px;
}
to {
  opacity: 1;
  transform: translateX(0px);
  letter-spacing: 0px;
}
`;

const textFade = keyframes`

0% {
opacity: 0;
transform: translateY(50px);


}
20% {
  opacity: 0;
 //transform: translateY(-50px);
  
  
  }
100% {
  opacity: 1;
  transform: translateY(0px);
}
`;

const fadeInFromRight = keyframes`
from {
opacity: 0;
transform: translateX(30px);

}
to {
  opacity: 1;
  transform: translateX(0px);
  
}
`;

/////////////////////////

const HEADER = styled.header`
 // background: linear-gradient(-45deg, #54b09f, #d7532f, #2f7766, #54b09f);
  background: linear-gradient(-45deg, #f0b74d, #c59d52, #2f7766, #54b09f);
  background-size: 300% 300%;
  animation: gradient 30s ease infinite;
  /*background-image: linear-gradient(#ffc14f, ${COLORS.background});*/
  /* background-image: linear-gradient(${COLORS.header}, ${COLORS.background}); */
  width: 100vw;
  //height: 75%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

const Profil = styled.section`
  display: flex;
  margin-bottom: 100px;

  ${VIEWPORT.small} {
    margin: 0 5vw 25px;
  }

  ${VIEWPORT.medium} {
    margin: 0 5vw 50px;
  }

  ${VIEWPORT.large} {
    margin: 0 15vw 100px;
    width: 60vw;
  }
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  display: flex;
  align-items: center;
  ${VIEWPORT.small} {
    width: 90vw;
  }

  ${VIEWPORT.medium} {
    width: 70vw;
  }

  ${VIEWPORT.large} {
  }
`;
const TitleDiv = styled.div`
  ${VIEWPORT.small} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 90vw;
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;

const H1 = styled.h1`
  text-align: right;
  //////////
  animation-name: ${textFadeAndCompress};
  animation-duration: 3s;

  ${VIEWPORT.small} {
    margin-right: 5px;
    text-align: center;
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;
const H2 = styled.h2`
  text-align: right;
  margin-top: -65px;
  width: 100%;
  animation-name: ${textFadeAndCompress};
  animation-duration: 3s;

  ${VIEWPORT.small} {
    //border-top: 1px solid rgb(${COLORS.lightText});
    text-align: center;
    margin-top: -30px;
    padding-top: 10px;
  }

  ${VIEWPORT.medium} {
    text-align: center;
    margin-top: -30px;
  }

  ${VIEWPORT.large} {
    width: 97%;
  }
`;
////////////////////////////
const ImgCenter = styled.img`
  max-height: 300px;
  max-width: 300px;
  height: 70vw;
  width: 70vw;

  border-radius: 50%;
  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
  margin-top: 30px;

  animation-name: ${textFade};
  animation-duration: 3s;

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
    display: none;
  }

  ${VIEWPORT.large} {
    display: none;
  }
`;

const P = styled.p`
  animation-name: ${textFade};
  animation-duration: 2s;

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;
const ImgLeft = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
  margin-top: 100px;
  margin-left: 20px;
  animation-name: ${fadeInFromRight};
  animation-duration: 3s;

  ${VIEWPORT.small} {
    display: none;
  }

  ${VIEWPORT.medium} {
    height: 250px;
  }

  ${VIEWPORT.large} {
    height: 300px;
  }
`;
const Svg = styled.svg`
  /* blau */
  width: 100vw;
  margin-top: 50px;
  margin-bottom: 0px;
`;
const Svg2 = styled.svg`
  width: 100vw;
  margin-top: -370px;
  margin-bottom: -5px;
`;

///////////////////////////////////////////
