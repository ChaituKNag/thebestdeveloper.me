import styled from "styled-components"
import { Button } from "@material-ui/core"
import lighten from "../../utils/lighten"

const SpecialButton = styled(Button)`
  background-image: ${props => props.bg || "inherit"};
  font-family: "Source Sans Pro";
  background-size: 200%;
  font-size: 2rem;
  box-shadow: 0 0 10px 0px, 0 0 10px 2px ${props => lighten(props.border, 30)},
    0 0 10px 3px ${props => lighten(props.border, 70)},
    0 0 10px 5px ${props => lighten(props.border, 70)};
  border-radius: 2rem;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`

export default SpecialButton
