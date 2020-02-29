import { Link, navigate } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import ClearRoundedIcon from "@material-ui/icons/ClearRounded"
import { Button } from "@material-ui/core"
import Menu from "../styled/Menu"
import TwoColumnGrid from "../styled/TwoColumnGrid"

const StyledHeader = styled.header`
  padding: 1rem 1rem 2rem;

  display: flex;
  align-items: center;
`

const NoMarginH1 = styled.h1`
  margin: 0;
  flex: 1;
`

const StyledMenuIcon = styled(MenuRoundedIcon)`
  font-size: 3rem;
  cursor: pointer;
  color: grey;
  z-index: 0;
`

const StyledCloseIcon = styled(ClearRoundedIcon)`
  font-size: 3rem;
  cursor: pointer;
  z-index: 0;

  & svg {
    fill: #fdfffc;
  }
`

const MenuButton = styled(Button)`
  z-index: 2;
  color: #fdfffc;
`

const useStyles = makeStyles(theme => ({
  primaryLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  menuButton: {
    color: "#fdfffc",
    fontFamily: "Source Sans Pro",
    fontSize: "2rem",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => setMenuOpen(m => !m)

  const handleButtonClick = page => () => navigate(page)
  return (
    <StyledHeader>
      <NoMarginH1>
        <Link className={classes.primaryLink} to="/">
          {siteTitle}
        </Link>
      </NoMarginH1>

      {menuOpen && (
        <Menu>
          <TwoColumnGrid maxWidth="600px">
            <Button
              className={classes.menuButton}
              size="large"
              onClick={handleButtonClick("/profile")}
            >
              My Profile
            </Button>
            <Button
              className={classes.menuButton}
              size="large"
              onClick={handleButtonClick("/works")}
            >
              Fun Stuff
            </Button>
            <Button
              className={classes.menuButton}
              size="large"
              onClick={handleButtonClick("/projects")}
            >
              Projects
            </Button>
            <Button
              className={classes.menuButton}
              size="large"
              onClick={handleButtonClick("/connect")}
            >
              Lets connect!
            </Button>
          </TwoColumnGrid>
        </Menu>
      )}

      <MenuButton onClick={handleMenuClick}>
        {!menuOpen && <StyledMenuIcon />}
        {menuOpen && <StyledCloseIcon />}
      </MenuButton>
    </StyledHeader>
  )
}
export default Header
