import React from 'react'
import { Total_Cont, TotalDivLeft, Total_Num, TotalDivRight } from '../Styled/Main'



function Total() {
    return (
        <div>

            <Total_Cont>
                <TotalDivLeft>
                    <p>
                        Here we can have/write addtional notes for the client 
                        to get a better understanding of this invoice
                    </p>
                </TotalDivLeft>

                <TotalDivRight>
                    <p>Total Due</p>
                    <Total_Num><h2> &#8358; 750,000.00 </h2></Total_Num>
                </TotalDivRight>
            
                
            </Total_Cont>


        </div>
    )
}

export default Total
