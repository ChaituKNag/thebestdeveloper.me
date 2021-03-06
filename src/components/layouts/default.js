import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../common/Header"
import Footer from "../common/Footer"
import Link from "../common/Link"
import StyledContainer from "../styled/StyledContainer"
import StyledMain from "../styled/StyledMain"
import { CommonGlobalStyles } from "../../global-styles"

const Layout = ({ children, middle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryDefault {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CommonGlobalStyles />
      <StyledContainer maxWidth="md">
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain middle={middle}>{children}</StyledMain>
        <Footer>
          {`© `}
          {new Date().getFullYear()},{` `}
          <Link href="https://nagakonada.com">Naga Chaitanya Konada</Link>
        </Footer>
      </StyledContainer>
    </>
  )
}

export default Layout
