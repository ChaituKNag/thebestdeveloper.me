import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import BannerText from "../components/styled/BannerText"

const index = () => {
  return (
    <Layout>
      <BannerText variant="h1" component="h6" align="center">
        <u>HELLO!</u>
      </BannerText>
      <BannerText variant="h2" align="center">
        I'm a <u>front-end developer</u> with good tech-lead skills
      </BannerText>
      <Typography align="center">
        (
        <a
          href="https://github.com/ChaituKNag/TheBestDeveloper/tree/site"
          target="_blank"
          rel="noopener noreferrer"
        >
          in-progress
        </a>
        )
      </Typography>
    </Layout>
  )
}

export default index
