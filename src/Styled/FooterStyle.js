import styled from "styled-components";

export const FooterCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    padding: 20px;

`;

export const Linked = styled.a`
    text-decoration: none;
    color: #036df5;
    cursor: pointer;
`;

export const Button = styled.button`
     background: none;
    padding: 10px;
    width: 100px;
    border-radius: 5px;
    border:2px solid #b4b5b9;
    color:grey;
    &:hover{
        cursor: pointer;
    }
`;
