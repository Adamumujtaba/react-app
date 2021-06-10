import styled from "styled-components"

export const Logo = styled.h1`
    content: '';
    background:  #eae9ee;
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: 100%;
    margin-right: 20px;

    @media screen and (max-width:690px){
        height: 40px;
        width: 40px;
    }
`;

export const SchName = styled.h3`
    text-transform: capitalize;
    font-weight: 500;

`;

export const SchId = styled.h1`
    color: #b1b1b1;
    font-weight: 400;
    text-transform: uppercase;

    @media screen and (max-width:690px){
        font-size: x-large;
    }
`;

export const Address1 = styled.p`
    width: 200px;
    margin: 20px 0px;
`