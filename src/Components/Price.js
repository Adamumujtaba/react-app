import React from 'react'
import { Container } from "../Styled/Container";
import { Hori_Line, PriceCont, PriceDiv, Price_Num } from "../Styled/Main";


function Price(props) {
    return (
        <div>
      <Container>

               <PriceCont>

                <PriceDiv>
                    <span>Item</span>
                    <pre>Price</pre>
                    </PriceDiv>

                <PriceDiv>
                    <b>Tuition fee</b>
                    <Price_Num>&#8358; 250,000.00</Price_Num> 
                </PriceDiv>
                <Hori_Line />

                <PriceDiv>
                    <b>Tuition fee</b>
                    <Price_Num>&#8358; 250,000.00</Price_Num> 
                </PriceDiv>
                <Hori_Line />


                <PriceDiv>
                    <b>Tuition fee</b>
                    <Price_Num>&#8358; 250,000.00</Price_Num> 
                </PriceDiv>

                </PriceCont>
 
                </Container>

        </div>

    )
}

export default Price
