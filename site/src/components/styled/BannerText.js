import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  text: {
    padding: `${theme.spacing(5)} 0`,
  },
}))

const BannerText = ({ children, padding, size, ...restProps }) => {
  const classes = useStyles()

  return (
    <Typography
      style={{
        padding,
        fontSize: size,
      }}
      className={classes.text}
      {...restProps}
    >
      {children}
    </Typography>
  )
}

export default BannerText
