import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"

const StyledHeader = styled.header`
  padding: 1rem 1rem 2rem;
  font-family: "Raleway";
`

const NoMarginH1 = styled.h1`
  margin: 0;
`

const useStyles = makeStyles(theme => ({
  primaryLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <StyledHeader>
      <NoMarginH1>
        <Link className={classes.primaryLink} to="/">
          {siteTitle}
        </Link>
      </NoMarginH1>
    </StyledHeader>
  )
}
export default Header
