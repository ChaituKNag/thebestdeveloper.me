import styled from "styled-components"
import Button from "./Button"

export const SkillChip = styled(Button)`
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 18px;

  &:hover {
    transform: translateY(-2px);
    transition: transform 100ms ease-in-out;
  }
`

export const Skillset = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`
