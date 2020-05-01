import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded"
import { Button, Tooltip } from "@material-ui/core"

const StyledHeader = styled.header`
  padding: 1rem 1rem 2rem;

  display: flex;
  align-items: center;
`

const NoMarginH1 = styled.h1`
  margin: 0;
  flex: 1;
  font-weight: 400;
  font-family: "PT Sans";
`
const MenuButton = styled(Button)`
  z-index: 2;
`

const useStyles = makeStyles((theme) => ({
  primaryLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
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

      <Tooltip title="Let's discuss" arrow placement="bottom">
        <MenuButton
          variant="contained"
          color="secondary"
          component="a"
          href="tel:+918125636944"
        >
          <PhoneRoundedIcon />
        </MenuButton>
      </Tooltip>
    </StyledHeader>
  )
}
export default Header
