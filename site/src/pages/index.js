import React from "react"
import Layout from "../components/layout"
import BannerText from "../components/styled/BannerText"
import data from "../data/home-page.yaml"
import Section from "../components/common/Section"
import { Skillset, SkillChip } from "../components/styled/Skillset"
import { navigate } from "gatsby"
import { Typography, Tooltip } from "@material-ui/core"
import { SectionNavButton } from "../components/styled/Buttons"
import MoreAboutMe from "../components/MoreAboutMe"
import ContactInfo from "../components/ContactInfo"
import RoundedProfileAvatar from "../components/RoundedProfileAvatar"
import IntroDiv from "../components/styled/IntroDiv"

const index = () => {
  return (
    <Layout>
      <IntroDiv>
        <RoundedProfileAvatar />
        <Section title={data.salutation}>
          <BannerText size="28px">{data.bio}</BannerText>
        </Section>
      </IntroDiv>
      <Section title="My skills 👨‍💻">
        <Skillset>
          {data.skills
            ? data.skills.map((skill, i) => (
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
        <Typography gutterBottom>{data.projectsIntro}</Typography>
        <SectionNavButton
          variant="outlined"
          color="secondary"
          label="All my official projects"
          onClick={() => navigate("/projects")}
        />
      </Section>

      <Section title="Fun stuff 🌼">
        <Typography gutterBottom>{data.funStuffIntro}</Typography>
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

export default index
