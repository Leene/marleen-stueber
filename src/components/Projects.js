import React from "react";
import styled from "styled-components";
import { VIEWPORT } from "../constants";
import Klammer from "../img/icon_klammer_white.png";
import EmmetTypingGame from "./projects/EmmetTypingGame";
import HungryWalker from "./projects/HungryWalker";

export default function Projects() {
  return (
    <Section id="projects">
      <Icon src={Klammer} />
      <h3>Projekte</h3>

      <HungryWalker />
      <EmmetTypingGame />
    </Section>
  );
}

const Section = styled.section`
  background-color: #59636c;
  margin-top: -5px;
  margin-bottom: 50px;
  padding-bottom: 10px;
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
    margin-top: -40px;
  }

  ${VIEWPORT.large} {
  }
`;

const Icon = styled.img`
  height: 150px;
  opacity: 0.2;
  margin-top: 0px;

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    margin-top: -150px;
  }
`;
