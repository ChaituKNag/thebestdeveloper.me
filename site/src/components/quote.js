import React from "react"
import styled from "styled-components"

const StyledQuote = styled.blockquote`
  background-image: radial-gradient(
    circle 879px at 10.4% 22.3%,
    rgba(255, 235, 238, 1) 0%,
    rgba(186, 190, 245, 1) 93.6%
  );
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;
`

const Quote = ({ children }) => {
  return <StyledQuote>{children}</StyledQuote>
}

export default Quote
