import React from 'react'
import { FaPenSquare } from 'react-icons/fa';
import { Button, FooterCont, Linked } from '../Styled/FooterStyle';



function Footer() {
    return (
        <div>
            <hr />
            <FooterCont>
            
            <p>This can be updated from the <Linked>fees management</Linked> section</p>
              

            <Linked>
                 <FaPenSquare />  Edit Template 
           </Linked>
          
          
           <Button>Close</Button>
                 
            </FooterCont>
   
        </div>
    )
}

export default Footer

