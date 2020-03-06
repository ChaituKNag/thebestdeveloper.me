import styled from "styled-components"
import { Chip } from "@material-ui/core"

export const SkillChip = styled(Chip)`
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 10px;

  &:hover {
    transform: translateY(-2px);
    transition: transform 100ms ease-in-out;
  }
`

export const Skillset = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
