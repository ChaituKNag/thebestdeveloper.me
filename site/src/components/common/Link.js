import React from "react"
import GatsbyLink from "gatsby-link"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  primaryLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}))

function isInternalLink(href) {
  return href.startsWith("/")
}

const Link = ({ href, children, ...restProps }) => {
  const classes = useStyles()
  return (
    <>
      {isInternalLink(href) ? (
        <GatsbyLink className={classes.primaryLink} to={href} {...restProps}>
          {children}
        </GatsbyLink>
      ) : (
        <a className={classes.primaryLink} href={href} {...restProps}>
          {children}
        </a>
      )}
    </>
  )
}

export default Link
