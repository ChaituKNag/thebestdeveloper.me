import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import BannerText from "../components/styled/BannerText"
import Link from "../components/common/Link"

const index = () => {
  return (
    <Layout>
      <BannerText variant="h3" component="h6">
        Hello!
      </BannerText>
      <BannerText variant="h4">
        I'm a <u>senior front-end developer</u> with good tech-lead skills...
      </BannerText>

      <Typography>
        (
        <Link
          href="https://github.com/ChaituKNag/TheBestDeveloper/tree/site"
          target="_blank"
          rel="noopener noreferrer"
        >
          in-progress
        </Link>
        )
      </Typography>
    </Layout>
  )
}

export default index
