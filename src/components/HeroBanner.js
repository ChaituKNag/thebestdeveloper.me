import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colors, fontFamilies } from "../config"
import FadeInSection from "./animations/FadeInSection"
import Text from "./styled/Text"

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
  linkedin: <Text color="green">LinkedIn</Text>,
  github: <Text color="red">Github</Text>,
  youtube: <Text color="red">YouTube</Text>,
  twitter: <Text color="lightblue">Twitter</Text>,
  facebook: <Text color="darkblue">Facebook</Text>,
  instagram: <Text color="pink">Instagram</Text>,
}

const HeroBanner = ({
  bio,
  salutation,
  socialLinks,
  introVideoUrl,
  introVideoCoverImage,
}) => {
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

HeroBanner.propTypes = {
  bio: PropTypes.string.isRequired,
  salutation: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      infoText: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    }).isRequired
  ),
  introVideoUrl: PropTypes.string,
  introVideoCoverImage: PropTypes.string,
}

export default HeroBanner
