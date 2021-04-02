import styled from "styled-components"
import { colors, themeColors } from "../../config"
import lighten from "../../utils/lighten"

export const Label = styled.label`
  font-weight: bold;
  opacity: 0.8;
  font-size: 0.9rem;
  display: block;
  padding: ${(props) => props.padding || "0 2px 0.2rem"};
`

const commonStyles = (props) => `
  padding: ${props.padding || ".5rem"};
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.babyPowder};
  border: ${
    props.bordered
      ? `2px solid ${lighten(props.color || themeColors.primary, 80)}`
      : "none"
  };

  ${
    props.simple
      ? `border-bottom: 2px solid ${lighten(
          props.color || themeColors.primary,
          80
        )}`
      : "none"
  };

  color: ${props.color || themeColors.primary};
  border-radius: 0.3rem;

  ${props.simple && `border-radius: 0.3rem 0.3rem 0 0`};

  &:focus {
    background-color: ${colors.greys.light};
    outline: none;
  }
`

export const Input = styled.input`
  ${(props) => commonStyles(props)}
`

export const Textarea = styled.textarea.attrs((props) => ({
  rows: props.rows || 6,
}))`
  resize: ${(props) => props.resize || "vertical"};
  ${(props) => commonStyles(props)}
`
