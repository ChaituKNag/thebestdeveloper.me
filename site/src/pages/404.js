import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, P } from "../components/default"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>NOT FOUND</H1>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Layout>
)

export default NotFoundPage
