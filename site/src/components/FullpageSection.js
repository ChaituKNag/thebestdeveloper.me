import React from "react"
import styled from "styled-components"

const FlushDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: ${props => (props.bgColor ? props.bgColor : "inherit")};
  color: ${props => (props.color ? props.color : "inherit")};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColumnDiv = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: ${props => (props.maxWidth ? props.maxWidth : 600)}px;
  width: ${props => (props.maxWidth ? props.maxWidth : 600)}px;
`

const FullpageSection = ({ children, ...props }) => {
  return (
    <FlushDiv {...props}>
      <ColumnDiv>{children}</ColumnDiv>
    </FlushDiv>
  )
}

export default FullpageSection
