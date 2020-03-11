import React from "react"
import Layout from "../components/layout"
import { PageTitle, ItemTitle } from "../components/common/Headings"
import { Paper, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import works from "../data/works-page.yaml"

const useStyles = makeStyles(theme => ({
  disclaimer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  workItem: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  workDescription: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(2),
    borderRadius: 20,
    textTransform: "capitalize",
  },
}))
const Works = () => {
  const classes = useStyles()
  return (
    <Layout>
      <PageTitle>{works.title}</PageTitle>
      <Typography gutterBottom className={classes.disclaimer}>
        {works.disclaimer}
      </Typography>
      {works.items.map((work, i) => (
        <Paper
          key={`work-item-${i}`}
          className={classes.workItem}
          variant="outlined"
        >
          <ItemTitle>{work.title}</ItemTitle>
          <Typography className={classes.workDescription}>
            {work.description}
          </Typography>
          <Button
            variant="outlined"
            component="a"
            href={work.demo}
            target="_blank"
            className={classes.button}
            size="small"
            color="secondary"
          >
            Demo
          </Button>
          <Button
            variant="text"
            component="a"
            href={work.sourceCode}
            target="_blank"
            className={classes.button}
            size="small"
            color="primary"
          >
            Source Code
          </Button>
        </Paper>
      ))}
    </Layout>
  )
}

export default Works
