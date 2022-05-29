import { createGlobalStyle } from "styled-components";
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 18px;
        font-family: 'Barlow', sans-serif;
        background-color: #63a4ff;
        background-image: ${({ theme }) => theme.colors.mainGradient}
    }
    #root {
        height: 100%;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
