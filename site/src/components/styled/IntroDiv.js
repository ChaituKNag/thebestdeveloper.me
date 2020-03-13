import styled from "styled-components"

const IntroDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export default IntroDiv
