import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import Paper from "@material-ui/core/Paper"
import { Typography, CssBaseline, Chip } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  tableContainer: {
    marginBottom: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  pointsDiv: {
    paddingTop: theme.spacing(4),
  },
  pointItem: {
    paddingBottom: theme.spacing(2),
  },
  moreDetailsLink: {
    marginTop: theme.spacing(2),
  },
  label: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
}))

const ProjectTable = ({ project }) => {
  const classes = useStyles()
  const [showPoints, setShowPoints] = useState(false)
  const handleMoreDetailsToggle = () => setShowPoints(s => !s)
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="project table">
          <TableBody>
            <TableRow>
              <TableCell align="right" className={classes.label}>
                Company
              </TableCell>
              <TableCell>{project.company}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.label}>
                Client
              </TableCell>
              <TableCell>{project.client}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.label}>
                Role
              </TableCell>
              <TableCell>{project.role}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.label}>
                Technologies
              </TableCell>
              <TableCell>{project.tech}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CssBaseline />
      {!showPoints && (
        <Chip
          color="secondary"
          onClick={handleMoreDetailsToggle}
          label="More details"
          variant="outlined"
          className={classes.moreDetailsLink}
          icon={<ExpandMoreIcon />}
        />
      )}
      {showPoints && (
        <Chip
          color="secondary"
          onClick={handleMoreDetailsToggle}
          label="More details"
          variant="outlined"
          className={classes.moreDetailsLink}
          icon={<ExpandLessIcon />}
        />
      )}
      {showPoints && (
        <div className={classes.pointsDiv}>
          {project.points.map((point, j) => (
            <Typography
              display="block"
              gutterBottom
              key={`project---point-${j}`}
              className={classes.pointItem}
            >
              {point}
            </Typography>
          ))}
        </div>
      )}
    </>
  )
}

export default ProjectTable
