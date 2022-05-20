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
        background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
    }
    #root {
        height: 100%;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
