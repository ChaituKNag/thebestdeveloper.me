import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  pageTitle: {
    fontFamily: "Alice",
  },
  sectionTitle: {
    fontFamily: "Alice",
  },
}))

export const PageTitle = ({ children, ...restProps }) => {
  const classes = useStyles()
  return (
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      {...restProps}
      className={classes.pageTitle}
    >
      {children}
    </Typography>
  )
}

export const SectionTitle = ({ children, ...restProps }) => {
  const classes = useStyles()
  return (
    <Typography
      variant="h4"
      component="h3"
      gutterBottom
      {...restProps}
      className={classes.sectionTitle}
    >
      {children}
    </Typography>
  )
}

export const ItemTitle = props => {
  const classes = useStyles()

  return (
    <Typography
      variant="h5"
      component="h3"
      gutterBottom
      className={classes.sectionTitle}
      {...props}
    ></Typography>
  )
}
