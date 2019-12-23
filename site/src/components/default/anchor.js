import styled from "styled-components"
import React from "react"

const StyledAnchor = styled.a`
  color: white;
`

export default ({ external, children, ...rest }) => {
  const extProps = {
    target: external ? "_blank" : "_self",
    noreferrer: !!external,
    noopener: !!external,
    nofollow: !!external,
  }

  return (
    <StyledAnchor {...extProps} {...rest}>
      {children}
    </StyledAnchor>
  )
}
