import React, { Fragment } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
const Blog = () => {
  const {
    allMarkdownRemark: { edges: blogPosts },
  } = useStaticQuery(graphql`
    query BlogsList {
      allMarkdownRemark(
        filter: {
          internal: {}
          fileAbsolutePath: { regex: "/.*site/static/blog.*/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              tags
            }
            fileAbsolutePath
            html
          }
        }
      }
    }
  `)

  console.log("blogs", blogPosts)
  return (
    <Layout>
      {blogPosts && (
        <Fragment>
          <h2>All Blog Posts</h2>
          {blogPosts.map(({ node: post }) => (
            <div key={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
          ))}
        </Fragment>
      )}
    </Layout>
  )
}

export default Blog
