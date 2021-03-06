import React, { useState } from "react"
import marked from "marked"
import PropTypes from "prop-types"
import { OutlineButton } from "./styled/Button"
import Table from "./styled/Table"

const ProjectTable = ({ project }) => {
  const [showPoints, setShowPoints] = useState(false)
  const handleMoreDetailsToggle = () => setShowPoints((s) => !s)
  return (
    <>
      <Table>
        <Table.body>
          <Table.row>
            <Table.cell>Company</Table.cell>
            <Table.cell>{project.company}</Table.cell>
          </Table.row>
          <Table.row>
            <Table.cell>Client</Table.cell>
            <Table.cell>{project.client}</Table.cell>
          </Table.row>
          <Table.row>
            <Table.cell>Role</Table.cell>
            <Table.cell>{project.role}</Table.cell>
          </Table.row>
          <Table.row>
            <Table.cell>Technologies</Table.cell>
            <Table.cell>{project.tech.join(", ")}</Table.cell>
          </Table.row>
        </Table.body>
      </Table>
      <OutlineButton color="secondary" onClick={handleMoreDetailsToggle}>
        More details
      </OutlineButton>
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
