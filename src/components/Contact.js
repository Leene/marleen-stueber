import { COLORS, VIEWPORT } from "../constants";
import React from "react";
import styled, { keyframes } from "styled-components";

export default function Contact() {
  return (
    <DIV>
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
          href="mailto:marleenstueber@web.de"
          title="E-Mail an marleenstueber@web.de"
        >
          <Img3 src="https://img.icons8.com/material-outlined/384/ffffff/new-post.png" />
        </a>
      </IconWrapper>
    </DIV>
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

const IconFadeIn3 = keyframes`
0% {
  transform: scale(50%);
  opacity:0;
}
60% {
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

const IconWrapper = styled.div`
  z-index: 0;
  width: 450px;
  border: 3px solid red;
  display: flex;
  justify-content: space-evenly;
  img {
    width: 100px;
    height: 100px;
    &:hover {
      width: 120px;
      height: 120px;
      transition: 0.3s;
      margin: -10px;
    }
  }
`;

const DIV = styled.div`
  margin-top: 50px;
`;
