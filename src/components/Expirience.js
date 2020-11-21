

import React from 'react';
import styled from 'styled-components'
import Karre from '../img/icon_karre_white.png'
 
export default function Experience(){
    
    return <Section  id="expirience">
<Img src={Karre} />
<h2>Praxiserfahrung</h2>

h3 <H3>Junior QA (Werkstudent) </H3>
<p> bei SinnerSchrader Commerce GmbH</p>
<p>Januar 2018 - Dezember 2018</p>
<p>Aufgabe: Qualitätssicherung von Webseiten</p>

<H3>Projektassistenz</H3>
<p> bei sitegeist neos solutions GmbH</p>
<p>März  2015 - November 2017</p>
<p>Aufgaben: Contentpflege, Bildbearbeitung, Präsentationsvorbereitung</p>

<H3>Praktikantin der Grafik</H3>
<p>bei spotsonfire GmbH, Communicators GmbH &amp; Co.KG, submedia GmbH</p>
<p>März 2007 - Juni 2009</p>
<p>Aufgaben: Illustration, Bildbearbeitung, Logoentwicklung</p>

</Section> 
}

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
margin-top:-150px;
` 