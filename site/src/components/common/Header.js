import { Link, navigate } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import ClearRoundedIcon from "@material-ui/icons/ClearRounded"
import { Button } from "@material-ui/core"
import Menu from "../styled/Menu"

import SpecialButton from "../styled/SpecialButton"
import TwoColumnGrid from "../styled/TwoColumnGrid"

const StyledHeader = styled.header`
  padding: 1rem 1rem 2rem;
  font-family: "Raleway";
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
  color: grey;
  z-index: 0;
`

const MenuButton = styled(Button)`
  z-index: 2;
`

const useStyles = makeStyles(theme => ({
  primaryLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
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
            <SpecialButton
              size="large"
              border="#1c92d2"
              bg={`linear-gradient(to right, #1c92d2 0%, #f2fcfe 51%, #1c92d2 100%)`}
              onClick={handleButtonClick("/profile")}
            >
              My Profile
            </SpecialButton>
            <SpecialButton
              size="large"
              border="#EF3B36"
              bg={`linear-gradient(to right, #EF3B36 0%, #FFFFFF 51%, #EF3B36 100%)`}
              onClick={handleButtonClick("/works")}
            >
              Fun Stuff
            </SpecialButton>
            <SpecialButton
              size="large"
              border="#fffc00"
              bg={`linear-gradient(to right, #fffc00 0%, #ffffff 51%, #fffc00 100%)`}
              onClick={handleButtonClick("/projects")}
            >
              Projects
            </SpecialButton>
            <SpecialButton
              size="large"
              border="#abbaab"
              bg={`linear-gradient(to right, #abbaab 0%, #ffffff 51%, #abbaab 100%)`}
              onClick={handleButtonClick("/connect")}
            >
              Lets connect!
            </SpecialButton>
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
