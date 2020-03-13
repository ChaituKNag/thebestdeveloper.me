import styled from "styled-components"

const StyledMain = styled.main`
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.middle ? "center" : "flex-start")};
`

export default StyledMain
