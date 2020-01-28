import React from "react"
import styled from "styled-components"

const FloatingHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  min-height: 200px;
  background: transparent;
  color: white;
`

const FloatingHeader = () => {
  return <FloatingHeaderWrapper>Floating header!</FloatingHeaderWrapper>
}

export default FloatingHeader
