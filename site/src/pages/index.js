import React from "react"
import Layout from "../components/layout"
import BannerText from "../components/styled/BannerText"
import data from "../data/home-page.yaml"
import Section from "../components/common/Section"
import { Skillset, SkillChip } from "../components/styled/Skillset"
import { navigate } from "gatsby"
import { Typography } from "@material-ui/core"
import { SectionNavButton } from "../components/styled/Buttons"

const index = () => {
  console.log(data)
  return (
    <Layout>
      <Section title={data.salutation}>
        <BannerText size="28px">{data.bio}</BannerText>
      </Section>

      <Section title="My skills 👨‍💻">
        <Skillset>
          {data.skills
            ? data.skills.map((skill, i) => (
                <SkillChip
                  color="primary"
                  key={`${skill.id}-id`}
                  label={skill.title}
                  onClick={() => navigate(skill.link)}
                  variant="outlined"
                />
              ))
            : null}
        </Skillset>
      </Section>

      <Section title="Projects 🏢">
        <Typography gutterBottom>{data.projectsIntro}</Typography>
        <SectionNavButton
          variant="outlined"
          color="secondary"
          label="All my official projects"
          onClick={() => navigate("/projects")}
        />
      </Section>

      <Section title="Fun Stuff 🌼">
        <Typography gutterBottom>{data.funStuffIntro}</Typography>
      </Section>
    </Layout>
  )
}

export default index
