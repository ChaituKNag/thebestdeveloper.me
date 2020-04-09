import React from "react"
import Layout from "../components/layout"
import { PageTitle, ItemTitle } from "../components/common/Headings"
import { Paper, Typography, Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import works from "../data/works-page.yaml"
import { useStaticQuery, graphql } from "gatsby"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import get from "lodash.get"
import Img from "gatsby-image"

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
  imageWrapper: {
    margin: theme.spacing(3),
  },
}))

const worksDataOptions = {
  label: "Edit works",
  fields: [
    { label: "Title", component: "text", name: "rawJson.title" },
    { label: "Disclaimer", component: "textarea", name: "rawJson.disclaimer" },
    {
      label: "Work Items",
      name: "rawJson.items",
      component: "group-list",
      itemProps: item => ({
        key: item.id,
        label: item.title,
      }),
      defaultItem: () => ({
        name: "New Work Item",
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),
      fields: [
        { label: "Work title", name: "title", component: "text" },
        {
          label: "Work description",
          name: "description",
          component: "textarea",
        },
        { label: "Demo link", name: "demo", component: "text" },
        { label: "Source code link", name: "sourceCode", component: "text" },
        {
          label: "Preview image",
          name: "preview",
          component: "image",
          previewSrc: (formValues, { input }) => {
            const path = input.name.replace("rawJson", "jsonNode")
            const gatsbyImageNode = get(formValues, path)
            if (!gatsbyImageNode || !gatsbyImageNode.childImageSharp) return ""
            //specific to gatsby-image
            return gatsbyImageNode.childImageSharp.fluid.src
          },
          uploadDir: () => {
            return "/src/images/"
          },
          parse: filename => `../images/${filename}`,
        },
      ],
    },
  ],
}
const Works = () => {
  const classes = useStyles()
  const jsonData = useStaticQuery(graphql`
    query WorksPageContent {
      dataJson(fileRelativePath: { regex: "/.*works-page.json.*/" }) {
        title
        disclaimer
        items {
          title
          description
          demo
          sourceCode
          preview {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fileRelativePath
        rawJson
      }
    }
  `)
  const [values] = useLocalJsonForm(jsonData.dataJson, worksDataOptions)
  return (
    <Layout>
      <PageTitle>{values.title}</PageTitle>
      <Typography gutterBottom className={classes.disclaimer}>
        {values.disclaimer}
      </Typography>
      {values.items &&
        values.items.map((work, i) => {
          return (
            <Paper
              key={`work-item-${i}`}
              className={classes.workItem}
              variant="outlined"
            >
              <ItemTitle>{work.title}</ItemTitle>
              <Typography className={classes.workDescription}>
                {work.description}
              </Typography>
              <div className={classes.imageWrapper}>
                <Img fluid={work.preview.childImageSharp.fluid} alt="works" />
              </div>
              <div>
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
              </div>
            </Paper>
          )
        })}
    </Layout>
  )
}

export default Works
