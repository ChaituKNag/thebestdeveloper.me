import { createGlobalStyle } from "styled-components"
import { fontFamilies } from "./config"

export const CommonGlobalStyles = createGlobalStyle`
    body {
        font-size: 18px;
        font-family: ${fontFamilies.primary}
    }

    button, input {
        font-family: ${fontFamilies.primary};
        font-size: 1rem;
    }
`
