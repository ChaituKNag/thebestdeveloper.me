import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import BannerText from "../components/styled/BannerText"

const index = () => {
  return (
    <Layout middle>
      <BannerText>The Best Developer!!!</BannerText>
      <Typography align="center">
        (
        <a
          href="https://github.com/ChaituKNag/TheBestDeveloper/tree/site"
          target="_blank"
          rel="noopener noreferrer"
        >
          coming soon
        </a>
        )
      </Typography>
    </Layout>
  )
}

export default index
