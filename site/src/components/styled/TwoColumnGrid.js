import React from "react"
import styled from "styled-components"

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${props => props.maxWidth || "100%"};
  margin: 50px auto;
  grid-gap: 50px;
`
