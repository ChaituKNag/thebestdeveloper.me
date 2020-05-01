import React from "react"
import { createGlobalStyle } from "styled-components"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import { colors, themeColors } from "../config"

const GlobalStyleLight = createGlobalStyle`
  html, body {
    background-color: ${colors.mintCreamTransparent};
    color: ${colors.crayola};
    margin: 0;
    padding: 0;
  }
`
const GlobalStyleDark = createGlobalStyle`
  html, body {
    background-color: ${colors.jet};
    color: ${colors.babyPowder};
  }
`

// https://coolors.co/fdfffc-235789-c1292e-f1d302-020100
let lightTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontSize: 18,
      fontFamily: "PT Sans",
    },
    palette: {
      primary: {
        main: themeColors.lightMain,
      },
      secondary: {
        main: themeColors.lightSecondary,
      },
    },
  })
)

// https://coolors.co/8edce6-fffffa-f1607e-22aaa1-373737
let darkTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontSize: 18,
      fontFamily: "PT Sans",
    },
    palette: {
      primary: {
        main: themeColors.darkMain,
      },
      secondary: {
        main: themeColors.darkSecondary,
      },
    },
    overrides: {
      MuiExpansionPanel: {
        root: {
          backgroundColor: themeColors.darkBg,
          color: themeColors.lightFg,
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.3), 0px 1px 1px 0px rgba(0,0,0,0.34), 0px 1px 3px 0px rgba(0,0,0,0.32)",
        },
      },
      MuiTable: {
        root: {
          backgroundColor: themeColors.darkBg,
          color: themeColors.lightFg,
        },
      },
      MuiTableCell: {
        body: {
          color: themeColors.lightFg,
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: themeColors.darkBg,
          color: themeColors.lightFg,
        },
        outlined: {
          border: `1px solid ${themeColors.lightFg}`,
        },
      },
      MuiExpansionPanelSummary: {
        expandIcon: {
          color: themeColors.lightFg,
        },
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
