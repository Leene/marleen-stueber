import { COLORS, VIEWPORT } from "../constants";
import React from "react";
import styled from "styled-components";
import meinAntlitz from "../img/marleen_stueber_quadrat.png";
import Navigation from "./Navigation";
import Contact from "./Contact";

export default function Header() {
  return (
    <><NavDiv>
              <Navigation />
            </NavDiv>
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
            
            <Contact/>

            
          </DIV>

          <ImgLeft src={meinAntlitz} />
        </Profil>

        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#008080"
            fill-opacity="0.5"
            d="M0,224L1440,32L1440,220L0,220Z"
          ></path>
        </Svg>
        <Svg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#46515B"
            fill-opacity="1"
            d="M0,84L1440,288L1440,420L0,420Z"
          ></path>
        </Svg2>
      </HEADER>
    </>
  );
}

const NavDiv =  styled.div`


`


const P = styled.p`
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;
const TitleDiv = styled.div`


  ${VIEWPORT.small} {
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    width:90vw;
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;






const H1 = styled.h1`
text-align:right;

${VIEWPORT.small} {
  margin-right:5px;
  text-align:center;
}

${VIEWPORT.medium} {
 
}

${VIEWPORT.large} {

  
}
`
const H2 = styled.h2`
//border: 1px solid black;

text-align:right;
margin-top:-65px;
width:100%;
${VIEWPORT.small} {
  //border-top: 1px solid rgb(${COLORS.lightText});
  text-align:center;
  margin-top:-30px;
  padding-top:10px;
}

${VIEWPORT.medium} {
  text-align:center;
  margin-top:-30px;
  
}

${VIEWPORT.large} {
  width:97%;

}
`


const Profil = styled.section`
  display: flex;
  
 
  ${VIEWPORT.small} {
    margin: 0 5vw;
   
  
  }

  ${VIEWPORT.medium} {
    margin: 0 5vw;
  }

  ${VIEWPORT.large} {
    margin: 0 15vw;
    width: 60vw;
  }
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  ${VIEWPORT.small} {
    width: 90vw;
  }

  ${VIEWPORT.medium} {
    width: 70vw;
  }

  ${VIEWPORT.large} {
  }
`;

const ImgLeft = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
  margin-top: 100px;
  margin-left:10px;

  ${VIEWPORT.small} {
    display: none;
    
  }

  ${VIEWPORT.medium} {
    height: 300px;

  
  }

  ${VIEWPORT.large} {
    height: 350px;

    
  }
`;

const ImgCenter = styled.img`
  height: 87vw;
  width: 87vw;
  border-radius: 50%;
  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};

  margin-top: 30px;

  ${VIEWPORT.small} {
   
  }

  ${VIEWPORT.medium} {
    display: none;
   
  }

  ${VIEWPORT.large} {
    display: none;
  
  }
`;

const Svg = styled.svg`
  /* blau */
  width: 100vw;
  margin-top: 0px;
`;
const Svg2 = styled.svg`
  width: 100vw;
  margin-top: -400px;
`;
const HEADER = styled.header`
  background-image: linear-gradient(#ffc14f, ${COLORS.background});
  /* background-image: linear-gradient(${COLORS.header}, ${COLORS.background}); */
  width: 100vw;
  height: 75%;
  
`;

