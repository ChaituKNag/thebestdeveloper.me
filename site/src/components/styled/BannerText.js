import React from "react"
import { Typography } from "@material-ui/core"

const BannerText = ({ children }) => {
  return (
    <Typography align="center" variant="h1" component="h2" gutterBottom>
      {children}
    </Typography>
  )
}

export default BannerText
