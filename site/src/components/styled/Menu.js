import styled from "styled-components"
import { colors } from "../../config"

export default styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 1;
  background-color: ${colors.bdazzledBlue};
`
