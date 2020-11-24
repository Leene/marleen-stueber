import React from 'react'
import styled from 'styled-components'

import './App.css'
import Skills from './components/Skills'
import Header from './components/Header'
import Education from './components/Education'
import Expirience from './components/Expirience'
import Projects from './components/Projects'
import { COLORS } from './constants'
import Contact from "./components/Contact";

function App() {
    return (
        <APP className="App">
            <Wrap>
                <Header />
                
                <Skills />
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#59636C"
                        fill-opacity="1"
                        d="M0,224L1440,32L1440,320L0,320Z"
                    ></path>
                </Svg>
                <Projects  />
                <Svg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#46515b"
                        fill-opacity="0.5"
                        d="M0,96L1440,224L1440,320L0,320Z"
                    ></path>
                </Svg2>
                <Education />
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#59636C"
                        fill-opacity="1"
                        d="M0,224L1440,32L1440,320L0,320Z"
                    ></path>
                </Svg>
                <Expirience />
                <Footer>
                <ContactDiv>
                    <Contact/>
                </ContactDiv>
                

                    <Svg2
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#337065"
                            fill-opacity="1"
                            d="M0,96L1440,224L1440,320L0,320Z"
                        ></path>
                    </Svg2>
                  
                    <p>© 2020 Marleen Stüber</p>
                </Footer>
            </Wrap>
        </APP>
    )
}

export default App

const APP = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: rgb(${COLORS.lightText});
`

const Wrap = styled.div`
background-color: #46515b;
    
    padding:0;
    margin:0;
`
const Svg = styled.svg`

    width: 100vw;
    margin-top: -20px;
`
const Svg2 = styled.svg`
    /* blau */
    width: 100vw;
    margin-top: -250px;
    
    
`
const ContactDiv =styled.div`
margin-bottom: -100px;

`
const Footer = styled.footer`
background-color: ${COLORS.footer};
border: 1px solid ${COLORS.footer};
`
