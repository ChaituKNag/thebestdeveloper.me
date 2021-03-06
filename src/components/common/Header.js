import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../styled/Button"
import PropTypes from "prop-types"

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

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <NoMarginH1>
        <Link to="/">{siteTitle}</Link>
      </NoMarginH1>

      <MenuButton color="secondary" as="a" href="tel:+918125636944">
        📞
      </MenuButton>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}
export default Header
