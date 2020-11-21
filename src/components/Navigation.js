import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navigation() {
    return (
        <Nav>
             <Button>
                <Anchor href="#skills"> Computerkenntnisse </Anchor>
            </Button>
            <Button>
                <Anchor href="#projects"> Projekte </Anchor>
            </Button>
            <Button>
                <Anchor href="#education"> Bildung </Anchor>
            </Button>
            <Button>
                <Anchor href="#expirience"> Erfahrung </Anchor>
            </Button>
            {/* <Button>
                <Anchor href="#contact"> Kontakt </Anchor>
            </Button> */}
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    margin-top: 60px;
`
const Button = styled.button`
    cursor: pointer;
   
    background-color: rgba(${COLORS.shadow}, 0);
    padding: 10px;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-right: 20px;
    border: 3px solid rgb(${COLORS.lightText});
    border-radius: 10px;

    &:hover {
        color: rgb(${COLORS.footer});
        background-color: rgba(${COLORS.lightText}, 0.3);
    }
`


const Anchor =styled(AnchorLink)`
color: rgb(${COLORS.lightText});;
text-decoration:none; 
`