/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { CssBaseline, Container } from "@material-ui/core"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { deepOrange, lightGreen } from "@material-ui/core/colors"

import Header from "./common/Header"
import Footer from "./common/Footer"

const GlobalStyle = createGlobalStyle`
  html, body {
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  }
`

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StyledMain = styled.main`
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.middle ? "center" : "flex-start")};
`

let theme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: "Merriweather",
  },
  palette: {
    primary: deepOrange,
    secondary: lightGreen,
  },
})

theme = responsiveFontSizes(theme)

const Layout = ({ children, middle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <StyledContainer maxWidth="md">
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain middle={middle}>{children}</StyledMain>
        <Footer>
          {`© `}
          {new Date().getFullYear()},{` `}
          <a href="https://nagakonada.com">Naga Chaitanya Konada</a>
        </Footer>
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
