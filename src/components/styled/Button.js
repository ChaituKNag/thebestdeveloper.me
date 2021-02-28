import styled from "styled-components"
import { colors, themeColors } from "../../config"

export const SectionNavButton = styled.button`
  margin: 20px 10px 20px 0;
`

const Button = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  border: none;
  color: ${(props) => props.color || themeColors.primary};
  background-color: ${(props) => props.bgColor || colors.greys.light};
`
export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => props.color || themeColors.primary};
`

export const SolidButton = styled(Button)`
  background-color: ${(props) => props.color || themeColors.primary};
  color: ${(props) => props.textColor || colors.white};
`
export default Button
