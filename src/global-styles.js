import { createGlobalStyle } from "styled-components"
import { fontFamilies } from "./config"

export const CommonGlobalStyles = createGlobalStyle`
    body {
        font-size: 18px;
        font-family: ${fontFamilies.primary};
        padding: 0;
        margin: 0;
    }

    button, input, textarea {
        font-family: ${fontFamilies.primary};
        font-size: 1rem;
    }
`
