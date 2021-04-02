import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../styled/Button"
import PropTypes from "prop-types"
import { Column } from "../styled/Container"

const StyledHeader = styled.header`
  padding: 1rem 0 2rem;

  display: flex;
  align-items: center;
`

const NoMarginH1 = styled.h1`
  margin: 0;
  flex: 1;
  font-weight: 400;
  font-family: "PT Sans";
  display: inline-block;

  a {
    text-decoration: none;
  }
`
const MenuButton = styled(Button)`
  z-index: 2;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  return (
    <Column>
      <StyledHeader>
        <NoMarginH1>
          <Link to="/">{siteTitle}</Link>
        </NoMarginH1>

        <MenuButton as="a" href="tel:+918125636944">
          Let&apos;s talk
        </MenuButton>
      </StyledHeader>
    </Column>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}
export default Header
