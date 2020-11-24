

import React from 'react';
import styled from 'styled-components'
import Karre from '../img/icon_karre_white.png'
import { COLORS, VIEWPORT } from "../constants";
 
export default function Experience(){
    
    return <Section  id="expirience">
<Img src={Karre} />
<h2>Praxiserfahrung</h2>

<H3>Junior QA (Werkstudent) </H3>
<Company> bei SinnerSchrader Commerce GmbH</Company>
<p>Januar 2018 - Dezember 2018</p>
<p><Up>Aufgabe:</Up> Qualitätssicherung von Webseiten</p>

<H3>Projektassistenz</H3>
<Company> bei sitegeist neos solutions GmbH</Company>
<p>März  2015 - November 2017</p>
<p><Up>Aufgaben:</Up> Contentpflege, Bildbearbeitung, Präsentationsvorbereitung</p>

<H3>Praktikantin der Grafik</H3>
<Company>bei spotsonfire GmbH, Communicators GmbH &amp; Co.KG, submedia GmbH</Company>
<p>März 2007 - Juni 2009</p>
<p><Up>Aufgaben:</Up> Illustration, Bildbearbeitung, Logoentwicklung</p>

</Section> 
}

const Company= styled.p`
font-style: italic;
color:${COLORS.headline};
`



const Up = styled.span`
text-transform:uppercase;
font-weight:bold;
`

const H3 = styled.h3`
padding-top:50px;

`
const Section = styled.section`
background-color:#59636C;
padding-bottom:150px;
margin-bottom: 0px;
margin-top:-5px;
`
const Img = styled.img`
height:150px;
opacity:0.2;

margin-top:0px;


${VIEWPORT.small} {

}

${VIEWPORT.medium} {
 
}

${VIEWPORT.large} {
  margin-top: -150px;
}
` 