import styled from "styled-components"
import { colors, themeColors } from "../../config"
import lighten from "../../utils/lighten"

export const Label = styled.label`
  font-weight: bold;
  opacity: 0.8;
  font-size: 0.9rem;
  display: block;
  padding: 0 0.5rem 0.2rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.babyPowder};
  border: 2px solid
    ${(props) => lighten(props.primary || themeColors.primary, 80)};
  color: ${(props) => props.color || themeColors.primary};
  border-radius: 0.3rem;

  &:focus {
    background-color: ${colors.greys.light};
    outline: none;
  }
`

export const Textarea = styled.textarea.attrs((props) => ({
  rows: props.rows || 6,
}))`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  resize: ${(props) => props.resize || "vertical"};
  background-color: ${colors.babyPowder};
  border: 2px solid
    ${(props) => lighten(props.primary || themeColors.primary, 80)};
  color: ${(props) => props.color || themeColors.primary};
  border-radius: 0.3rem;

  &:focus {
    background-color: ${colors.greys.light};
    outline: none;
  }
`
