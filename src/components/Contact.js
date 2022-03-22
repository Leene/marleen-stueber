import { COLORS, VIEWPORT } from "../constants";
import React from "react";
import styled, { keyframes } from "styled-components";

export default function Contact() {
  return (
    <IconWrapper>
      <a
        href="https://github.com/Leene"
        target="_blank"
        rel="noreferrer"
        title="Mein Github-Profil"
      >
        <Img src="https://img.icons8.com/ios-glyphs/480/ffffff/github.png" />
      </a>
      <a
        href="https://www.xing.com/profile/Marleen_Stueber/cv"
        target="_blank"
        rel="noreferrer"
        title="Mein Xing-Profil"
      >
        <Img2 src="https://img.icons8.com/fluency-systems-filled/144/ffffff/xing.png" />
      </a>
      <a
        href="https://www.linkedin.com/in/marleen-st%C3%BCber-7645241b6/"
        target="_blank"
        rel="noreferrer"
        title="Mein LinkedIn-Profil"
      >
        <Img3 src="https://img.icons8.com/ios-filled/500/ffffff/linkedin-circled--v1.png" />
      </a>
      <a
        href="mailto:marleenstueber@web.de"
        title="E-Mail an marleenstueber@web.de"
      >
        <Img4 src="https://img.icons8.com/material-outlined/384/ffffff/new-post.png" />
      </a>
    </IconWrapper>
  );
}

/* Keyframe Declartions >>> */

const IconFadeIn1 = keyframes`
0% {
  transform: scale(50%);
  opacity:0;
}
20% {
  transform: scale(50%);
  opacity:0;
}
80% {
  transform: scale(120%); 
}
100% {
  transform: scale(100%);
  opacity:1; 
}
`;

const IconFadeIn2 = keyframes`
0% {
  transform: scale(50%);
  opacity:0;
}
30% {
  transform: scale(50%);
  opacity:0;
}
80% {
  transform: scale(120%); 
}
100% {
  transform: scale(100%);
  opacity:1; 
}
`;

const IconFadeIn3 = keyframes`
0% {
  transform: scale(50%);
  opacity:0;
}
40% {
  transform: scale(50%);
  opacity:0;
}
80% {
  transform: scale(120%); 
}
100% {
  transform: scale(100%); 
  opacity:1;
}
`;

const IconFadeIn4 = keyframes`
0% {
  transform: scale(50%);
  opacity:0;
}
50% {
  transform: scale(50%);
  opacity:0;
}
80% {
  transform: scale(120%); 
}
100% {
  transform: scale(100%); 
  opacity:1;
}
`;
/* <<< END Keyframe Declartions */

const Img = styled.img`
  animation-name: ${IconFadeIn1};
  animation-duration: 2s;
`;

const Img2 = styled.img`
  animation-name: ${IconFadeIn2};
  animation-duration: 2s;
`;

const Img3 = styled.img`
  animation-name: ${IconFadeIn3};
  animation-duration: 2s;
`;
const Img4 = styled.img`
  animation-name: ${IconFadeIn4};
  animation-duration: 2s;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
      width: 80px;
      height: 80px;
      transition: 0.3s;
      margin: -10px;

      ${VIEWPORT.small} {
        width: 50px;
        height: 50px;
        margin: -5px;
      }

      ${VIEWPORT.medium} {
        width: 60px;
        height: 60px;
        margin: -5px;
      }

      ${VIEWPORT.large} {
      }
    }
    ${VIEWPORT.small} {
      width: 40px;
      height: 40px;
      padding-left: 2px;
      padding-right: 2px;
    }

    ${VIEWPORT.medium} {
      width: 50px;
      height: 50px;
      padding-left: 2px;
      padding-right: 2px;
    }

    ${VIEWPORT.large} {
    }
  }
`;
