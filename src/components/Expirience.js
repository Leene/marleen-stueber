import React from "react";
import styled from "styled-components";
import Karre from "../img/icon_karre_white.png";
import { COLORS, VIEWPORT } from "../constants";

export default function Experience() {
  return (
    <Section id="expirience">
      <Img src={Karre} />

      <h3>Praxiserfahrung</h3>

      <h4>Junior QA (Werkstudent) </h4>
      <Company> bei SinnerSchrader Commerce GmbH</Company>
      <p>Januar 2018 - Dezember 2018</p>
      <p>
        <Up>Aufgabe:</Up> Qualitätssicherung von Webseiten
      </p>
      <HR />
      <h4>Projektassistenz</h4>
      <Company> bei sitegeist neos solutions GmbH</Company>
      <p>März 2015 - November 2017</p>
      <p>
        <Up>Aufgaben:</Up> Contentpflege, Bildbearbeitung,
        Präsentationsvorbereitung
      </p>
      <HR />
      <h4>Praktikantin der Grafik</h4>
      <Company>
        bei spotsonfire GmbH, Communicators GmbH &amp; Co.KG, submedia GmbH
      </Company>
      <p>März 2007 - Juni 2009</p>
      <p>
        <Up>Aufgaben:</Up> Illustration, Bildbearbeitung, Logoentwicklung
      </p>
    </Section>
  );
}

const Company = styled.p`
  font-style: italic;
  color: ${COLORS.headline};
  font-weight: 400;
  font-size: 1.5em;
  margin-top: -30px;
  margin-bottom: 40px;
  margin: -30px 5vw 40px 5vw;
`;
const HR = styled.hr`
  width: 90vw;
  border-bottom: 1px;
  margin-top: 40px;
  color: rgba(${COLORS.lightText}, 0.2);

  ${VIEWPORT.small} {
  }
  ${VIEWPORT.medium} {
  }
  ${VIEWPORT.large} {
    width: 60vw;
  }
`;

const Up = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

const h4 = styled.h4`
  padding-top: 50px;
`;

const Section = styled.section`
  background-color: #59636c;
  padding-bottom: 150px;
  margin-bottom: 0px;
  margin-top: -5px;
  p {
    line-height: 1em;
  }
  ${VIEWPORT.small} {
    line-height: 1.5em;
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    margin-top: -50px;
  }
`;

const Img = styled.img`
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
