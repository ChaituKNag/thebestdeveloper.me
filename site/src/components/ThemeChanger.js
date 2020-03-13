import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"

const GlobalStyleLight = createGlobalStyle`
  html, body {
    background-color: #ebf2e838;
    color: #26383F;
  }
`
const GlobalStyleDark = createGlobalStyle`
  html, body {
    background-color: #373737;
    color: #FFFFFA;
  }
`

// https://coolors.co/fdfffc-235789-c1292e-f1d302-020100
let lightTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontSize: 18,
      fontFamily: "Bellota",
    },
    palette: {
      primary: {
        main: "#F87666",
      },
      secondary: {
        main: "#592E83",
      },
    },
  })
)

// https://coolors.co/8edce6-fffffa-f1607e-22aaa1-373737
let darkTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontSize: 18,
      fontFamily: "Bellota",
    },
    palette: {
      primary: {
        main: "#F1607E",
      },
      secondary: {
        main: "#22AAA1",
      },
    },
  })
)

const ThemeChanger = ({ children }) => {
  const isDarkTheme = useMediaQuery("(prefers-color-scheme: dark)")

  console.log("isDarkTheme", isDarkTheme)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {isDarkTheme && <GlobalStyleDark />}
      {!isDarkTheme && <GlobalStyleLight />}
      {children}
    </ThemeProvider>
  )
}

export default ThemeChanger
