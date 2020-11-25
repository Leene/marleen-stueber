import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navigation() {
const [visible, setVisible] = useState("false")

function toggleFunction() {
    if (visible === true) {
        setVisible(false);
        
    }else {
        setVisible(true);
    }
      
}

const content=(
<BurgerMenu id="menu" visible={visible}>
<li>
  <Button>
    <Anchor href="#skills">Computerkenntnisse</Anchor>
  </Button>
</li>
<li>
  <Button>
    <Anchor href="#projects">Projekte</Anchor>
  </Button>
</li>
<li>
  <Button>
    <Anchor href="#education">Bildung</Anchor>
  </Button>
</li>
<li>
  <Button>
    <Anchor href="#expirience">Erfahrung</Anchor>
  </Button>
   
</li>
</BurgerMenu>
)

let toShow

    if (visible) {
        toShow = (<HideDiv hidden>{content}</HideDiv>)
    } else {
        toShow = (<HideDiv >{content}</HideDiv>)
    }
  

  return (
    <Nav>
        <NavBtnDiv>
      <NavButton>
        <Anchor href="#skills">Computerkenntnisse</Anchor>
      </NavButton>
      <NavButton>
        <Anchor href="#projects">Projekte</Anchor>
      </NavButton>
      <NavButton>
        <Anchor href="#education">Bildung</Anchor>
      </NavButton>
      <NavButton>
        <Anchor href="#expirience">Erfahrung</Anchor>
      </NavButton>
      {/* <Button>
                <Anchor href="#contact"> Kontakt </Anchor>
            </Button> */}
            
      <Burger onClick={() => toggleFunction()}> ☰</Burger>
</NavBtnDiv>
      <NavBurgerMenu>{toShow}</NavBurgerMenu>
    </Nav>
  );

  
}


const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
  background-color: ${COLORS.background};

  ${VIEWPORT.small} {
      
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;

const NavBtnDiv = styled.div`
display:flex;
  align-items:center;
  justify-content:center;


}

`
const NavBurgerMenu = styled.div`
${VIEWPORT.small} {
  
}

${VIEWPORT.medium} {
}

${VIEWPORT.large} {
}


` 
const HideDiv = styled.div`



`


const Button = styled.button`

  color: ${COLORS.lightText};
  background-color: rgba(${COLORS.shadow}, 0);
  padding: 12px;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 20px;
  border: none;

  &:hover {
    
    background-color: rgba(${COLORS.lightText}, 0.3);
    color: rgb(${COLORS.background});
  }

  ${VIEWPORT.small} {
    
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    
  }



`;

const NavButton = styled.button`

  color: ${COLORS.lightText};
  background-color: rgba(${COLORS.shadow}, 0);
  padding: 12px;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 20px;
  border: none;

  &:hover {
    
    background-color: rgba(${COLORS.lightText}, 0.3);
    color: rgb(${COLORS.background});
  }

  ${VIEWPORT.small} {
    display:none;
  }

  ${VIEWPORT.medium} {

  }

  ${VIEWPORT.large} {
  }



`;




const BurgerMenu = styled.ul`
  list-style: none;
`;


const Burger = styled.div`
width:50px;
cursor:pointer;
background-color:${COLORS.background};

color: rgb(${COLORS.lightText});
font-size:2em;

&:hover {
    background-color: rgba(${COLORS.lightText}, 0.3);
    color: ${COLORS.lightText};
    
}

${VIEWPORT.small} {
    
  }

  ${VIEWPORT.medium} {
    display:none;
  }

  ${VIEWPORT.large} {
    display:none;
  }

`




const Anchor = styled(AnchorLink)`
color: rgb(${COLORS.lightText});
  text-decoration: none;
  
}
`;

/*
${VIEWPORT.small} {
    
  }

  ${VIEWPORT.medium} {
    
  }

  ${VIEWPORT.large} {
    
  }
  */
