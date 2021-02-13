import React from "react"
import styled from "styled-components"
import { colors, fontFamilies } from "../config"
import FadeInSection from "./animations/FadeInSection"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import YoutubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import Link from "./common/Link"
import IntroVideo from "./IntroVideo"

const FullPageSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: rgb(40, 34, 35);
  background: linear-gradient(
    135deg,
    rgba(40, 34, 35, 1) 0%,
    rgba(89, 46, 131, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: space-evenly;
`

const HeroTitle = styled.h1`
  color: ${colors.babyPowder};
  font-family: ${fontFamilies.primary};
  font-size: 36px;
  font-weight: 400;

  @media (max-width: 960px) {
    font-size: 28px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const HeroBio = styled.article`
  font-size: 28px;
  color: ${colors.babyPowder};
  font-family: ${fontFamilies.primary};
  text-align: center;
  max-width: 960px;

  @media (max-width: 960px) {
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const IconGrid = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const IconBackground = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-radius: 28% 72% 68% 32% / 31% 44% 56% 69%;
  background-color: ${(props) => props.bg};
  font-size: 45px;
  cursor: pointer;
  margin: 30px;

  & svg {
    display: inline-block;
    width: 45px;
    height: 45px;
    fill: ${colors.babyPowder};
    transition: transform 200ms cubic-bezier(1, -2.34, 0.23, 3.87);
  }

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    margin: 10px;

    & svg {
      width: 35px;
      height: 35px;
    }
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:hover {
    box-shadow: 0 0 10px ${colors.mintCreamTransparent};
  }
`

const iconMap = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  youtube: <YoutubeIcon />,
  twitter: <TwitterIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
}

const HeroBanner = ({
  bio,
  salutation,
  socialLinks,
  introVideoUrl,
  introVideoCoverImage,
}) => {
  console.log(introVideoUrl, introVideoCoverImage)
  return (
    <FullPageSection>
      <FadeInSection>
        <IntroVideo url={introVideoUrl} coverImage={introVideoCoverImage} />
      </FadeInSection>
      <FadeInSection dir="right">
        <HeroTitle>{salutation}</HeroTitle>
      </FadeInSection>
      <FadeInSection>
        <HeroBio>{bio}</HeroBio>
      </FadeInSection>
      <FadeInSection dir="right">
        <IconGrid>
          {socialLinks.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              key={`social-icon-${item.icon}`}
              title={item.infoText}
            >
              <IconBackground bg={item.backgroundColor}>
                {iconMap[item.icon]}
              </IconBackground>
            </Link>
          ))}
        </IconGrid>
      </FadeInSection>
    </FullPageSection>
  )
}

export default HeroBanner
