import React from 'react'
import { Container } from '../Styled/Container';
import { Flexdiv } from "../Styled/Flexdiv"
import { Logo, SchId, SchName } from '../Styled/Head';



function Header(props) {
    return (
        <div>
    <Container>
        <Flexdiv>
 
            <Flexdiv>
                <Logo />
                <SchName>{props.schName}</SchName>
            </Flexdiv>

           <div>
                <SchId> {props.id}</SchId>
           </div>
           </Flexdiv>
    </Container>
            
        </div>
    )
}

export default Header
