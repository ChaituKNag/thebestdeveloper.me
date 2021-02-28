import styled from "styled-components"
import { colors, themeColors } from "../../config"
import lighten from "../../utils/lighten"

const Table = styled.table`
  ${(props) =>
    props.bordered &&
    `
    border: 1px solid ${colors.greys.light};
    `}
  box-sizing: border-box;
  width: 100%;
  min-width: 600px;
  overflow-x: scroll;
  border-collapse: collapse;

  ${(props) =>
    props.striped &&
    `
    tbody tr:nth-child(even) {
        background-color: ${colors.greys.lighter};
    }
  `}

  ${(props) =>
    props.highlight &&
    `
    tbody tr:hover {
    background-color: ${colors.greys.light};
  }
  `}
`
Table.row = styled.tr`
  border-bottom: 1px solid ${colors.greys.light};

  &:last-child {
    border-bottom: none;
  }
`
Table.cell = styled.td``
Table.head = styled.thead``
Table.body = styled.tbody``
Table.td = styled.td`
  padding: 0.8rem;
  border-right: 1px solid ${colors.greys.light};

  &:last-child {
    border-right: none;
  }
`
Table.th = styled.th`
  text-align: left;
  padding: 0.8rem;
  border-bottom: 2px solid ${lighten(themeColors.primary, 40)};
  border-right: 1px solid ${colors.greys.light};

  &:last-child {
    border-right: none;
  }
`

export default Table
