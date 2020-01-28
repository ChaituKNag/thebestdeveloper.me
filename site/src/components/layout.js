/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./common/Footer"

const ColumnDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => {
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
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ColumnDiv>
        <main>{children}</main>
        <Footer>
          {`© `}
          {new Date().getFullYear()},{` `}
          <a href="https://nagakonada.com">Naga Chaitanya Konada</a>
        </Footer>
      </ColumnDiv>
    </Fragment>
  )
}

export default Layout
