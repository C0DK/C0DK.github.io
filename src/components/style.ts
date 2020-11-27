import styled from "styled-components";
import {backgroundColor, fontName, primaryFontColor} from "../theme";


export const MainContainer = styled.div`
    background: ${backgroundColor};
    @import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: ${fontName};
    color: ${primaryFontColor};
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;
    min-height: 100vh;
`

export const PageTitle = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    margin: 0px 5px;
`

export const Tag = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
`
export const TagRow = styled.div`
    text-align: center;
    padding: 20px 0px 0px;
`
export const Ellipse = styled.span`
    height: 5px;
    width: 5px;
    background-color: ${primaryFontColor};
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
`
