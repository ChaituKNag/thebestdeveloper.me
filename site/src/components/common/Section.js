import React from "react"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionDiv: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
  sectionTitle: {
    fontFamily: "Life Savers",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    fontWeight: 700,
  },
}))

const Section = ({ title, children, ...restProps }) => {
  const classes = useStyles()
  return (
    <div className={classes.sectionDiv} {...restProps}>
      <Typography className={classes.sectionTitle} variant="h4" component="h2">
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default Section