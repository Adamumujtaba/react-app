import React from 'react'
import { InvoiceCont, InvoiceDiv, InvoiceMaiDiv } from '../Styled/Main'


function InvoiceFor() {
    return (
        <div>
       
        <InvoiceCont>
            
               <InvoiceMaiDiv>
                   <p>Invoice For:</p>
                    <b>Junior Secondary School 1 (JSS 1)</b>
                </InvoiceMaiDiv>
                    
                 <InvoiceDiv>
                    <p>Session:</p>
                    <b>2021/2022</b>              
                  </InvoiceDiv>
        
                <InvoiceDiv>

                    <p>Term:</p>
                    <b>1st Term</b>
                </InvoiceDiv>

        </InvoiceCont>
     

        
    </div>
    )
}

export default InvoiceFor
