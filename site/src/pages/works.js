import React from "react"
import Layout from "../components/layout"
import { PageTitle, ItemTitle } from "../components/common/Headings"
import { Paper, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ImageBox = styled.div`
  width: 100%;
  margin-bottom: 20px;

  & img {
    max-width: 100%;
  }
`

const useStyles = makeStyles((theme) => ({
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
  const { contentYaml: content } = useStaticQuery(graphql`
    query WorksPageContent {
      contentYaml(page: { eq: "works" }) {
        id
        title
        disclaimer
        items {
          workDemoLink
          workDescription
          workSourceCode
          workTitle
        }
      }
    }
  `)
  const classes = useStyles()

  console.log("Works content", content)
  return (
    <Layout>
      <PageTitle>{content.title}</PageTitle>
      <Typography gutterBottom className={classes.disclaimer}>
        {content.disclaimer}
      </Typography>
      {content.items.map((item, i) => (
        <Paper
          key={`work-item-${i}`}
          className={classes.workItem}
          variant="outlined"
        >
          <ItemTitle>{item.workTitle}</ItemTitle>
          <Typography className={classes.workDescription}>
            {item.workDescription}
          </Typography>
          <ImageBox>{/*<img src={item.workPreview} />*/}</ImageBox>
          <Button
            variant="outlined"
            component="a"
            href={item.workDemoLink}
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
            href={item.workSourceCode}
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
