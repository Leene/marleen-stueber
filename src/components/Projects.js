import React from 'react'
import styled from 'styled-components'
import { COLORS, VIEWPORT } from "../constants";
import Screen1 from '../img/startArea.png'
import Screen2 from '../img/ingame_view.png'
import Screen3 from '../img/GameOverDialog.png'
import Klammer from '../img/icon_klammer_white.png'

export default function Projects() {
    return (
        <Section id="projects">
          
<Icon src={Klammer} />
            <h3>Projekte</h3>
            <h4>Emmet Typing Game</h4>
            <p> Abschlussprojekt (Web Developer Bootcamp Januar - März 2020)</p>
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
            </SmallScreens>

            <URLBtnDiv>
            <URLBtn
                title="Zum Github-Repository von Emmet Typing Game"
                href="https://github.com/Leene/capstone-project"
                target="_blank"
                rel="noopener noreferrer"
            >
                Git-Repository
            </URLBtn>

            <URLBtn
                title="Zur Demo von Emmet Typing Game"
                href="https://leene.github.io/emmet-typing-game/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Demo
            </URLBtn> 
            </URLBtnDiv>
            
            
            
           
            

            
    
        </Section>
    )
}


const URLBtnDiv = styled.div`
margin-top:50px;
margin-bottom:100px;


`

const URLBtn = styled.a`

cursor: pointer;
    background-color: rgba(${COLORS.lightText},0.3);
    text-transform: uppercase;
    color: rgb(${COLORS.lightText});
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    letter-spacing: 1px;
    box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);
    
    margin:auto 20px;
    padding: 10px;
    &:hover {
        background-color: ${COLORS.headline};
    }
`



const Section = styled.section`
background-color:#59636C;
margin-top:-5px;
margin-bottom:50px;
padding-bottom: 10px;
${VIEWPORT.small} {
}

${VIEWPORT.medium} {
    margin-top:-40px;
   
}

${VIEWPORT.large} {
   
}

`





const Figure = styled.figure`
margin: 20px 0;
    ${VIEWPORT.small} {
        
    }
    
    ${VIEWPORT.medium} {
        
    }
    
    ${VIEWPORT.large} {
       
    }

    & figcaption{

       
        ${VIEWPORT.small} {
            margin-bottom: 20px;
        }
        
        ${VIEWPORT.medium} {
            
        }
        
        ${VIEWPORT.large} {
           
        }
    }

`

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
 
    
`
const Screens = styled.div`
margin-top:50px;
    display: flex;
    justify-content: center;

    ${VIEWPORT.small} {
        display:none;
    }
    
    ${VIEWPORT.medium} {
        display:none;
    }
    
    ${VIEWPORT.large} {
       
    }



`
const SmallScreens = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    ${VIEWPORT.small} {
        
    }
    
    ${VIEWPORT.medium} {
        
    }
    
    ${VIEWPORT.large} {
       display:none;
    }
    
`

const IFrame = styled.iframe`
    overflow: hidden;
    border: 0;
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
    width: 860px;
    height: 667px;
    margin-top: 50px;
    margin-bottom: 50px;
    ${VIEWPORT.small} {
    display:none;
    }
  
    ${VIEWPORT.medium} {
        display:none;

    }
  
    ${VIEWPORT.large} {
     
    }
    `


const SmallIFrame = styled.iframe`
    overflow: hidden;
    border: 0;
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
    width: 90vw;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 50px;

    ${VIEWPORT.small} {
    
    }
  
    ${VIEWPORT.medium} {
     
    }
  
    ${VIEWPORT.large} {
      
      display:none;

    }
    `



    const Icon = styled.img`
    height:150px;
    opacity:0.2;
    margin-top:0px;


    ${VIEWPORT.small} {
    
    }
  
    ${VIEWPORT.medium} {
     
    }
  
    ${VIEWPORT.large} {
      margin-top: -150px;
    }

    ` 


