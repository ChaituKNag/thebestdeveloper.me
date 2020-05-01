import React, { useState } from "react"
import Layout from "../components/layouts/default"
import { PageTitle } from "../components/common/Headings"
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Chip,
} from "@material-ui/core"
import Link from "../components/common/Link"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ProjectTable from "../components/ProjectTable"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles((theme) => ({
  panelList: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  heading: {
    marginRight: theme.spacing(2),
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
    alignSelf: "center",
  },
  detailsSection: {
    display: "block",
  },
  demoBtn: {
    cursor: "pointer",
  },
}))

const Projects = () => {
  const { contentYaml: content } = useStaticQuery(graphql`
    query ProjectsPageContent {
      contentYaml(page: { eq: "projects" }) {
        id
        title
        disclaimer
        recommendation
        projects {
          client
          company
          demo
          points
          role
          tech
          title
        }
      }
    }
  `)
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  console.log("projects page content", content)

  return (
    <Layout>
      <PageTitle>{content.title}</PageTitle>
      <Typography gutterBottom>{content.disclaimer}</Typography>
      <Typography gutterBottom>
        <Link
          href="https://www.linkedin.com/in/nagachaitanyakonada/"
          target="_blank"
        >
          {content.recommendation}
        </Link>
      </Typography>
      <div className={classes.panelList}>
        {content.projects.map((project, index) => (
          <ExpansionPanel
            key={project.title}
            expanded={expanded === project.title}
            onChange={handleChange(project.title)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`project${index}-content`}
              id={`project${index}-header`}
              className={classes.summary}
            >
              <Typography className={classes.heading} variant="h6">
                {project.title}
              </Typography>
              {project.demo && (
                <Typography className={classes.secondaryHeading}>
                  <Link
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                  >
                    <Chip
                      label="Demo"
                      component="button"
                      variant="outlined"
                      color="secondary"
                      className={classes.demoBtn}
                    />
                  </Link>
                </Typography>
              )}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detailsSection}>
              <ProjectTable project={project} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
