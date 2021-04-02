import styled from "styled-components"
import { colors, themeColors } from "../../config"

export const SectionNavButton = styled.button`
  margin: 20px 10px 20px 0;
`

const Button = styled.button`
  cursor: pointer;
  padding: 0.25rem 1rem;
  border-radius: 0.3rem;
  border: none;
  color: ${(props) => props.color || themeColors.primary};
  background-color: ${(props) => props.bgColor || colors.greys.light};
  text-decoration: none;
  margin: ${(props) => props.margin || "0"};
`
export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => props.color || themeColors.primary};
`

export const SolidButton = styled(Button)`
  background-color: ${(props) => props.color || themeColors.primary};
  color: ${(props) => props.textColor || colors.white};
  border: 1px solid ${(props) => props.color || themeColors.primary};
`
export default Button
