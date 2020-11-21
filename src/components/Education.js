import React from 'react'
import styled from 'styled-components'
import Talar from '../img/icon_talar_white.png'
import { COLORS } from '../constants'

export default function Education() {
    return (
        <>
            <Section id="education">
                {' '}
                {/* Aus-/Fortbildungen */}
                <Img src={Talar} />
                <h2>Aus- und Fortbildungen (Auszug)</h2>
                <h3>Web Developer Bootcamp</h3>
                <LeftText>
                    <p>Januar - März 2020</p>
                    <ul>
                        <li>
                            3-monatige Vollzeitfortbildung bei neuefische GmbH
                        </li>
                        <li>540 Stunden Wissensvermittlung und Übungen</li>
                        <li>
                            Entwicklung einer Mobile-App als Abschlussprojekt
                        </li>
                    </ul>
                    <h4>Vermittlete Inhalte </h4>
                </LeftText>
                
                <DIV>
                    <div>
                        <Tag>Funktionale Programmierung</Tag>
                        <Tag>JavaScript ES2020</Tag>
                        <Tag>Git Workflow</Tag>
                        <Tag>Shell</Tag>
                    </div>
                    <div>
                        <Tag>Bootstrap</Tag>
                        <Tag>HTML5</Tag>
                        <Tag>CSS3</Tag>
                        <Tag>Node.js</Tag>
                        <Tag>npm</Tag>
                        <Tag>React.js</Tag>
                        <Tag>JSX</Tag>
                        <Tag>Cypress</Tag>
                    </div>
                    <div>
                        <Tag>Storybook</Tag>
                        <Tag>TDD</Tag>
                        <Tag>Scrum</Tag>
                        <Tag>Kanban</Tag>
                        <Tag>Postman</Tag>
                    </div>
                </DIV>
                <h2>Bachelor-Studium Media Systems an der HAW </h2>
                <LeftText>
                    <p>März 2012 - Mai 2020</p>
                    <ul>
                        <li>
                            entspricht inhaltlich einem Studium der
                            Medieninformatik
                        </li>
                        <li>
                            Kenntnisse u.a.: Java 8, MySQL, Logik, Relationale
                            Datenbanken, Objekorientierte Programmierung,
                            Mathemathik für Informatiker, Motion Capture,
                            Assembler, Ruby, Verschlüsselungsalgorithmen
                        </li>
                        <li>05/2020 Exmatrikulation ohne Abschluss</li>
                    </ul>
                </LeftText>
                <h2>Ausbildung zur Mediengestalterin Digital/Print</h2>
                <LeftText>
                
                <p>Oktober 2005 - Oktober 2008</p>
                <ul>
                    <li>
                        Kenntnisse in gängigen Grafikprogrammen,
                        Design-Grundlagen und Typographie
                    </li>
                    <li>10/2008 IHK-Abschluss</li>
                </ul>
                </LeftText>

            </Section>
        </>
    )
}

const Section = styled.section``

const LeftText = styled.div`
    text-align: left;
    margin: 0 30%;
    font-size: 1.2em;
    & li {
        padding: 10px 0;
        
    }
`

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

const Tag = styled.button`
    margin: 5px;
    padding: 5px;
    border: none;
    box-shadow: 1px 1px 3px 2px rgba(${COLORS.primary}, 0.2);
    border-radius: 20px;
    background-color: rgb(${COLORS.lightText}, 0.4);
    font-weight: bold;
    letter-spacing: 1px;
    color: ${COLORS.background};
    padding: 10px;
    font-size: 1.2em;
    &:hover {
        background-color: rgba(${COLORS.lightText}, 0.6);
    }
`

const Img = styled.img`
    height: 150px;
    opacity: 0.2;
    margin-top: -150px;
`
