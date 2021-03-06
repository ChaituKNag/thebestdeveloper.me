import React from "react"
import Layout from "../components/layouts/default"
import { PageTitle } from "../components/common/Headings"
import Link from "../components/common/Link"
import Text from "../components/styled/Text"
import ProjectTable from "../components/ProjectTable"
import { OutlineButton } from "../components/styled/Button"
import { useStaticQuery, graphql } from "gatsby"

const projectsQuery = graphql`
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
`

const Projects = () => {
  const { contentYaml: content } = useStaticQuery(projectsQuery)

  return (
    <Layout>
      <PageTitle>{content.title}</PageTitle>
      <Text>{content.disclaimer}</Text>
      <Text>
        <Link
          href="https://www.linkedin.com/in/nagachaitanyakonada/"
          target="_blank"
        >
          {content.recommendation}
        </Link>
      </Text>
      <div>
        {content.projects.map((project) => (
          <div key={project.title}>
            <Text as="h6">{project.title}</Text>
            {project.demo && (
              <Link href={project.demo} target="_blank">
                <OutlineButton color="secondary">Demo</OutlineButton>
              </Link>
            )}
            <ProjectTable project={project} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
