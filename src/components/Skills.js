import React from 'react'
import styled from 'styled-components'
import Maus from '../img/icon_maus_white.png'
import { COLORS } from '../constants'


export default function Skills() {
    return (
        <section id="skills">
            {' '}
            {/* Computerkennnisse */}
            <Img src={Maus} />
            <H2>Computerkenntnisse</H2>
            <Table>
                <tr>
                    <td><H3>Fortgeschritten</H3></td>
                    <TD>
                        <p>
                            Javascript, React.js, JSX, HTML/CSS, Illustrator,
                            InDesign, Photoshop, Java, Funktionale
                            Programmierung
                        </p>
                    </TD>
                </tr>
                <tr>
                    <td><H3>Grundlagen</H3></td>
                    <TD>
                        <p>
                            Objektorientierte Programmierung (Java), Unity 3D,
                            MySQL, Jira, Redmine, VS Code,
                            Eclipse
                        </p>
                    </TD>
                </tr>
            </Table>
        </section>
    )
}




const H3 = styled.h3`
margin-right:10px;
text-align:right;
`
const H2 = styled.h2`

`
const TD = styled.td`
text-align:left;
padding:20px;
`


const Table = styled.table`
width:50%;

margin:auto;


`

const Img = styled.img`
    height: 150px;
    opacity: 0.2;
    margin-top: -100px;
`
