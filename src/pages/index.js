import React from "react"
import Layout from "../components/layouts/no-header"
import { Skillset, SkillChip } from "../components/styled/Skillset"
import { navigate, useStaticQuery, graphql } from "gatsby"
import Text from "../components/styled/Text"
import { OutlineButton } from "../components/styled/Button"
import MoreAboutMe from "../components/MoreAboutMe"
import ContactInfo from "../components/ContactInfo"
import SEO from "../components/common/seo"
import { Column } from "../components/styled/Container"

const Index = () => {
  const { contentYaml: content } = useStaticQuery(graphql`
    query HomePageContent {
      contentYaml(page: { eq: "home" }) {
        id
        bio
        funStuffIntro
        page
        projectIntro
        salutation
        skills {
          id
          link
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Column>
        <h2>My skills</h2>
        <Skillset>
          {content.skills
            ? content.skills.map((skill, i) => (
                <SkillChip
                  key={`skillid-${i}`}
                  color="primary"
                  onClick={() => navigate(skill.link)}
                >
                  {skill.title}
                </SkillChip>
              ))
            : null}
        </Skillset>
      </Column>

      <Column>
        <h2>Projects 🏢</h2>
        <Text>{content.projectIntro}</Text>
        <OutlineButton onClick={() => navigate("/projects")}>
          All my official projects
        </OutlineButton>
      </Column>

      <Column title="Fun stuff 🌼">
        <h2>Fun stuff 🌼</h2>
        <Text>{content.funStuffIntro}</Text>
        <OutlineButton onClick={() => navigate("/works")}>
          Find out more
        </OutlineButton>
      </Column>

      <Column>
        <h2>More about me 🤗</h2>
        <MoreAboutMe />
      </Column>

      <Column>
        <h2>Contact me</h2>
        <ContactInfo />
      </Column>
    </Layout>
  )
}

export default Index
