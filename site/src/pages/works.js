import React from "react"
import Layout from "../components/layouts/default"
import { PageTitle, ItemTitle } from "../components/common/Headings"
import { Paper, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import marked from "marked"
import Img from "gatsby-image"

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
          workPreview {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
          <Typography
            className={classes.workDescription}
            dangerouslySetInnerHTML={{ __html: marked(item.workDescription) }}
          ></Typography>
          {item.workPreview && item.workPreview.childImageSharp ? (
            <>
              <Typography variant="h5" component="h4">
                Preview:{" "}
              </Typography>
              <ImageBox>
                <Img fluid={item.workPreview.childImageSharp.fluid} />
              </ImageBox>
            </>
          ) : null}
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
