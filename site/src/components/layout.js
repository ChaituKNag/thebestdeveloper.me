import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./common/Header"
import Footer from "./common/Footer"
import Link from "./common/Link"
import ThemeChanger from "./ThemeChanger"
import StyledContainer from "./styled/StyledContainer"
import StyledMain from "./styled/StyledMain"

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
    <ThemeChanger>
      <StyledContainer maxWidth="md">
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain middle={middle}>{children}</StyledMain>
        <Footer>
          {`© `}
          {new Date().getFullYear()},{` `}
          <Link href="https://nagakonada.com">Naga Chaitanya Konada</Link>
        </Footer>
      </StyledContainer>
    </ThemeChanger>
  )
}

export default Layout
