import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants'
import Screen1 from '../img/startArea.png'
import Screen2 from '../img/ingame_view.png'
import Screen3 from '../img/GameOverDialog.png'
import Klammer from '../img/icon_klammer_white.png'

export default function Projects() {
    return (
        <Section id="projects">
          
<Icon src={Klammer} />
            <h2>Projekte</h2>
            <h3>Emmet Typing Game</h3>
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
            <div>
                <IFrame
                    src="https://codesandbox.io/embed/emmet-typing-game-76fn3?fontsize=14&hidenavigation=1&theme=dark&view=split&editorsize=55"
                    title="Emmet Typing Game"
                    allow=" accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></IFrame>
            </div>
        </Section>
    )
}
const Section = styled.section`
background-color:#59636C;
margin-top:-5px;

`

const Figure = styled.figure`
    margin: 0;
`

const IMG = styled.img`
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
    height: 500px;
    margin: 20px 5px 0 5px;
`
const Screens = styled.div`
    display: flex;
    justify-content: center;
`

const IFrame = styled.iframe`
    overflow: hidden;
    border: 0;
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
    width: 860px;
    height: 667px;
    margin-top: 50px;
    margin-bottom: 150px;
    
    `
    const Icon = styled.img`
    height:150px;
    opacity:0.2;
    margin-top:-150px;
    ` 