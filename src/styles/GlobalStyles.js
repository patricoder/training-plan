import { createGlobalStyle } from "styled-components";
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1rem;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
