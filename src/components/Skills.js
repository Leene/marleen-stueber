import React from "react";
import styled from "styled-components";
import Maus from "../img/icon_maus_white.png";
import { COLORS, VIEWPORT } from "../constants";

export default function Skills() {
  return (
    <section id="skills">
      {" "}
      {/* Computerkennnisse */}
      <Img src={Maus} />
      <H3>Computer&shy;kenntnisse</H3>
      <Table>
        <tr>
          <td>
            <H4>Fortgeschritten</H4>
          </td>
          <TD>
            <p>
              Javascript, React.js, JSX, HTML/CSS, Illustrator, InDesign,
              Photoshop, Java 8, Funktionale Programmierung
            </p>
          </TD>
        </tr>
        <tr>
          <td>
            <H4>Grundlagen</H4>
          </td>
          <TD>
            <p>
              Objektorientierte Programmierung (Java), Unity 3D, MySQL, Jira,
              Redmine, Github, VS Code, Eclipse
            </p>
          </TD>
        </tr>
      </Table>
      <SmallTable>
        <tr>
          <td>
            <H4>Fortgeschritten</H4>
          </td>
        </tr>
        <tr>
          <TD>
            <p>
              Javascript, React.js, JSX, HTML/CSS, Illustrator, InDesign,
              Photoshop, Java 8, Funktionale Programmierung
            </p>
          </TD>
        </tr>
        <tr>
          <td>
            <H4>Grundlagen</H4>
          </td>
        </tr>
        <tr>
          <TD>
            <p>
              Objektorientierte Programmierung (Java), Unity 3D, MySQL, Jira,
              Redmine, Github, VS Code, Eclipse
            </p>
          </TD>
        </tr>
      </SmallTable>
    </section>
  );
}

const H4 = styled.h4`
  text-align: left;

  ${VIEWPORT.small} {
    margin-bottom: 0px;
  }

  ${VIEWPORT.medium} {
    margin-bottom: 0px;
  }

  ${VIEWPORT.large} {
  }
`;

const H3 = styled.h3`
  ${VIEWPORT.small} {
    text-align: left;
    margin-left: 5vw;
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
  }
`;

const TD = styled.td`
  text-align: left;

  ${VIEWPORT.small} {
    padding: 0px;
  }

  ${VIEWPORT.medium} {
    padding: 0px;
  }

  ${VIEWPORT.large} {
    padding: 20px;
  }
`;

const Table = styled.table`
  width: 50%;

  margin: auto;

  & h3 {
    text-align: right;
  }

  ${VIEWPORT.small} {
    display: none;
  }

  ${VIEWPORT.medium} {
    display: none;
  }

  ${VIEWPORT.large} {
  }
`;

const SmallTable = styled.table`
  width: 90vw;

  margin: auto;

  & h3 {
    //border:1px solid pink ;
    margin: 0;
  }

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    display: none;
  }
`;

const Img = styled.img`
  height: 150px;
  opacity: 0.2;
  margin-top: 0px;
  }

  ${VIEWPORT.small} {
    
  }

  ${VIEWPORT.medium} {
   
  }

  ${VIEWPORT.large} {
    margin-top: -100px;
  }

`;
