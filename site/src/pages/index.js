import React from "react"
import Layout from "../components/layout"
import BannerText from "../components/styled/BannerText"
import Section from "../components/common/Section"
import { Skillset, SkillChip } from "../components/styled/Skillset"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { Typography, Tooltip } from "@material-ui/core"
import { SectionNavButton } from "../components/styled/Buttons"
import MoreAboutMe from "../components/MoreAboutMe"
import ContactInfo from "../components/ContactInfo"
import IntroDiv from "../components/styled/IntroDiv"
import RoundedProfileAvatar from "../components/RoundedProfileAvatar"
import SEO from "../components/seo"
import { useLocalJsonForm } from "gatsby-tinacms-json"

const homeDataOptions = {
  label: "Home Page Data",
  fields: [
    { label: "Salutation", name: "rawJson.salutation", component: "text" },
    { label: "Bio", name: "rawJson.bio", component: "text" },
    {
      label: "Projects Introduction",
      name: "rawJson.projectsIntro",
      component: "text",
    },
    {
      label: "Fun Stuff Introduction",
      name: "rawJson.funStuffIntro",
      component: "text",
    },
    {
      label: "Skills List",
      name: "rawJson.skills",
      component: "group-list",
      itemProps: item => ({
        key: item.id,
        label: item.title,
      }),
      fields: [
        { label: "Skill Title", name: "title", component: "text" },
        { label: "Skill Id", name: "skillCode", component: "text" },
        { label: "Path", name: "link", component: "text" },
      ],
    },
  ],
}

const Index = () => {
  const jsonData = useStaticQuery(graphql`
    query HomePageContent {
      dataJson(fileRelativePath: { regex: "/.*home-page.json.*/" }) {
        salutation
        bio
        skills {
          skillCode
          title
          link
        }
        projectsIntro
        funStuffIntro
        fileRelativePath
        rawJson
      }
    }
  `)
  const [values] = useLocalJsonForm(jsonData.dataJson, homeDataOptions)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <IntroDiv>
        <RoundedProfileAvatar />
        <Section title={values.salutation}>
          <BannerText size="28px">{values.bio}</BannerText>
        </Section>
      </IntroDiv>
      <Section title="My skills 👨‍💻">
        <Skillset>
          {values.skills
            ? values.skills.map((skill, i) => (
                <Tooltip
                  arrow
                  placement="bottom"
                  title={`All my fun projects including ${skill.title}`}
                  key={`${skill.id}-id`}
                  enterDelay={500}
                >
                  <SkillChip
                    color="primary"
                    label={skill.title}
                    onClick={() => navigate(skill.link)}
                    variant="outlined"
                  />
                </Tooltip>
              ))
            : null}
        </Skillset>
      </Section>

      <Section title="Projects 🏢">
        <Typography gutterBottom>{values.projectsIntro}</Typography>
        <SectionNavButton
          variant="outlined"
          color="secondary"
          label="All my official projects"
          onClick={() => navigate("/projects")}
        />
      </Section>

      <Section title="Fun stuff 🌼">
        <Typography gutterBottom>{values.funStuffIntro}</Typography>
        <SectionNavButton
          variant="outlined"
          color="secondary"
          label="Find out more"
          onClick={() => navigate("/works")}
        />
      </Section>

      <Section title="More about me 🤗">
        <MoreAboutMe />
      </Section>

      <Section title="Contact info 📞">
        <ContactInfo />
      </Section>
    </Layout>
  )
}

export default Index
