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

import Header from "./common/Header"
import Footer from "./common/Footer"
import Link from "./common/Link"

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #fdfffc;
    color: #020100;
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

// https://coolors.co/fdfffc-235789-c1292e-f1d302-020100
let theme = createMuiTheme({
  typography: {
    fontSize: 20,
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#c1292e",
    },
    secondary: {
      main: "#235789",
    },
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
          <Link href="https://nagakonada.com">Naga Chaitanya Konada</Link>
        </Footer>
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
