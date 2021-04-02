import React from "react"
import Layout from "../components/layouts/default"
import { PageTitle } from "../components/common/Headings"
import Link from "../components/common/Link"
import Text from "../components/styled/Text"
import ProjectTable from "../components/ProjectTable"
import { OutlineButton, SolidButton } from "../components/styled/Button"
import { useStaticQuery, graphql } from "gatsby"
import { Column } from "../components/styled/Container"
import { themeColors } from "../config"
import styled from "styled-components"

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

const DemoLinkButton = styled(SolidButton)`
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  border-radius: 1rem;
`

const ProjectTitle = styled(Text).attrs({
  as: "h3",
})`
  margin: 2rem 0 0.5rem;
`

const Projects = () => {
  const { contentYaml: content } = useStaticQuery(projectsQuery)

  return (
    <Layout>
      <Column>
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
              <ProjectTitle>
                {project.title}

                {project.demo && (
                  <Link href={project.demo} target="_blank">
                    <DemoLinkButton color={themeColors.secondary}>
                      Demo
                    </DemoLinkButton>
                  </Link>
                )}
              </ProjectTitle>
              <ProjectTable project={project} />
            </div>
          ))}
        </div>
      </Column>
    </Layout>
  )
}

export default Projects
