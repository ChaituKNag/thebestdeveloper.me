import React, { useState } from "react"
import marked from "marked"
import PropTypes from "prop-types"
import { OutlineButton } from "./styled/Button"
import Table from "./styled/Table"
import { themeColors } from "../config"
import styled from "styled-components"

const MoreDetails = styled(OutlineButton)`
  margin: 1rem 0;
`

const ProjectTable = ({ project }) => {
  const [showPoints, setShowPoints] = useState(false)
  const handleMoreDetailsToggle = () => setShowPoints((s) => !s)
  return (
    <>
      <Table bordered striped highlight>
        <Table.body>
          <Table.row>
            <Table.td>Company</Table.td>
            <Table.td>{project.company}</Table.td>
          </Table.row>
          <Table.row>
            <Table.td>Client</Table.td>
            <Table.td>{project.client}</Table.td>
          </Table.row>
          <Table.row>
            <Table.td>Role</Table.td>
            <Table.td>{project.role}</Table.td>
          </Table.row>
          <Table.row>
            <Table.td>Technologies</Table.td>
            <Table.td>{project.tech.join(", ")}</Table.td>
          </Table.row>
        </Table.body>
      </Table>
      <MoreDetails
        color={themeColors.primary}
        onClick={handleMoreDetailsToggle}
      >
        More details ↓
      </MoreDetails>
      {showPoints && (
        <div dangerouslySetInnerHTML={{ __html: marked(project.points) }} />
      )}
    </>
  )
}

ProjectTable.propTypes = {
  project: PropTypes.shape({
    company: PropTypes.string.isRequired,
    client: PropTypes.string,
    role: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    points: PropTypes.string,
  }).isRequired,
}

export default ProjectTable
