import { Link } from "gatsby"
import styled from "styled-components"

export default styled(Link)`
  color: #3030b5;
  text-decoration: none;
  border-bottom: 5px solid pink;
  font-weight: bold;

  &:hover {
    color: #d20f5f;
  }
`
