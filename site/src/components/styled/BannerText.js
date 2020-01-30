import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: "Acme",
    padding: `${theme.spacing(5)} 0`,
  },
}))

const BannerText = ({ children, align, ...restProps }) => {
  const classes = useStyles()

  return (
    <Typography
      align={align || "left"}
      variant="h1"
      component="h2"
      gutterBottom
      className={classes.text}
      {...restProps}
    >
      {children}
    </Typography>
  )
}

export default BannerText
