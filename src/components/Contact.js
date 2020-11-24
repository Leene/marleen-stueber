import { COLORS, VIEWPORT } from "../constants";
import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <DIV>
      <a
        href="https://github.com/Leene"
        target="_blank"
        title="Mein Github-Profil"
      >
        <span
          class="iconify"
          data-icon="octicon:mark-github-16"
          data-inline="false"
          data-width="50px"
          data-height="50px"
        ></span>
      </a>
      <a
        href="https://www.xing.com/profile/Marleen_Stueber/cv"
        target="_blank"
        title="Mein Xing-Profil"
      >
        <span
          class="iconify"
          data-icon="ri:xing-fill"
          data-inline="false"
          data-width="50"
          data-height="50"
        ></span>
      </a>
      <a
        href="mailto:marleenstueber@web.de"
        title="E-Mail an marleenstueber@web.de"
      >
        <span
          class="iconify"
          data-icon="octicon:mail-16"
          data-inline="false"
          data-width="50px"
          data-height="50px"
        ></span>
      </a>
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;

  a {
    color: white;
    margin: 0 10px;
  }
`;
