import React from "react"
import Layout from "../components/layouts/no-header"
import Section from "../components/common/Section"
import { Skillset, SkillChip } from "../components/styled/Skillset"
import { navigate, useStaticQuery, graphql } from "gatsby"
import Text from "../components/styled/Text"
import { OutlineButton } from "../components/styled/Button"
import MoreAboutMe from "../components/MoreAboutMe"
import ContactInfo from "../components/ContactInfo"
import SEO from "../components/common/seo"

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

  console.log("content", content)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Section title="My skills 👨‍💻">
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
      </Section>

      <Section title="Projects 🏢">
        <Text>{content.projectIntro}</Text>
        <OutlineButton color="secondary" onClick={() => navigate("/projects")}>
          All my official projects
        </OutlineButton>
      </Section>

      <Section title="Fun stuff 🌼">
        <Text>{content.funStuffIntro}</Text>
        <OutlineButton color="secondary" onClick={() => navigate("/works")}>
          Find out more
        </OutlineButton>
      </Section>

      <Section title="More about me 🤗">
        <MoreAboutMe />
      </Section>

      <Section title="Contact me">
        <ContactInfo />
      </Section>
    </Layout>
  )
}

export default Index
