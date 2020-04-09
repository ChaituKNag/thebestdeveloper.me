import React, { useState } from "react"
import Layout from "../components/layout"
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
import { useLocalJsonForm } from "gatsby-tinacms-json"

const useStyles = makeStyles(theme => ({
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

const projectsDataOptions = {
  label: "Projects Page Data",
  fields: [
    { label: "Title", name: "rawJson.title", component: "textarea" },
    { label: "Disclaimer", name: "rawJson.disclaimer", component: "textarea" },
    {
      label: "Recommendation",
      name: "rawJson.recommendation",
      component: "textarea",
    },
    {
      label: "Projects",
      name: "rawJson.projects",
      component: "group-list",
      itemProps: item => ({
        key: item.id,
        label: item.title,
      }),
      defaultItem: () => ({
        name: "New Project",
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),
      fields: [
        { label: "Project Title", name: "title", component: "textarea" },
        { label: "Company", name: "company", component: "text" },
        { label: "Client", name: "client", component: "text" },
        { label: "Role", name: "role", component: "text" },
        { label: "Technologies used", name: "tech", component: "textarea" },
        { label: "Demo Link", name: "demo", component: "text" },
        { label: "Important Points", name: "points", component: "markdown" },
      ],
    },
  ],
}

const Projects = () => {
  const jsonData = useStaticQuery(graphql`
    query ProjectsPageContent {
      dataJson(fileRelativePath: { regex: "/.*projects-page.json.*/" }) {
        title
        disclaimer
        recommendation
        projects {
          title
          company
          client
          role
          tech
          demo
          points
        }
        fileRelativePath
        rawJson
      }
    }
  `)
  const [values] = useLocalJsonForm(jsonData.dataJson, projectsDataOptions)
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Layout>
      <PageTitle>{values.title}</PageTitle>
      <Typography gutterBottom>{values.disclaimer}</Typography>
      <Typography gutterBottom>
        <Link
          href="https://www.linkedin.com/in/nagachaitanyakonada/"
          target="_blank"
        >
          {values.recommendation}
        </Link>
      </Typography>
      <div className={classes.panelList}>
        {values.projects.map((project, index) => (
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
                  <Link href={project.demo} target="_blank">
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
