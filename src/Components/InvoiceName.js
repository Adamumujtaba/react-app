import React from 'react'
import { InvoiceCont, InvoiceDiv, InvoiceMaiDiv } from '../Styled/Main'

function InvoiceName() {
    return (
        <div>
       
        <InvoiceCont>
            
             <InvoiceMaiDiv>
                 
                    <p>Invoice Name:</p>
                    <b>Tuition Fee Invoice</b>
            
              </InvoiceMaiDiv>
                 
             <InvoiceDiv>
             
                   <p>Date issued:</p>
                    <b>21st April 2021</b>
            </InvoiceDiv>


            <InvoiceDiv>

                    <p>Due date:</p>
                    <b>04th may 2021</b>
                 </InvoiceDiv>
           

                </InvoiceCont>
      
        

    </div>
    )
}

export default InvoiceName
