import styled from "styled-components"
import React from "react"
import { Column } from "../styled/Container"
import Link from "./Link"
import { colors } from "../../config"

const StyledFooter = styled.footer`
  padding: 2rem 1rem;
  font-family: "PT Sans";
  margin-top: 2rem;
  background-color: ${colors.babyPowder};
  font-size: 0.8em;
`

const Footer = () => (
  <StyledFooter>
    <Column>
      {`© `}
      {new Date().getFullYear()},{` `}
      <Link href="https://nagakonada.com">Naga Chaitanya Konada</Link>
    </Column>
  </StyledFooter>
)

export default Footer
