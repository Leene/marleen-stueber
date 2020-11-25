import React from 'react'
import styled from 'styled-components'

import './App.css'
import Skills from './components/Skills'
import Header from './components/Header'
import Education from './components/Education'
import Expirience from './components/Expirience'
import Projects from './components/Projects'
import { COLORS, VIEWPORT } from "./constants";
import Contact from "./components/Contact";
import GlobalStyle from "./components/GlobalStyle";


import GoogleFontLoader from 'react-google-font-loader';


function App() {
    return (
        <APP className="App">
            <GlobalStyle />
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
                    <ContactDiv>
                    <Contact/>
                </ContactDiv>
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

    & h3{

        color:${COLORS.headline};
        text-align:center;
    }
`

const Wrap = styled.div`
background-color: #46515b;
    
    padding:0px;
    margin:0;

    ${VIEWPORT.small} {
    }
    
    ${VIEWPORT.medium} {
    }
    
    ${VIEWPORT.large} {
    }


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



${VIEWPORT.small} {
    margin-top: -70px;
}

${VIEWPORT.medium} {
    margin-top: -100px;
}

${VIEWPORT.large} {
    margin-top: -180px;
}



`
const Footer = styled.footer`
background-color: ${COLORS.footer};
border: 1px solid ${COLORS.footer};
`
