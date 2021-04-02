import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colors, fontFamilies, themeColors } from "../config"
import FadeInSection from "./animations/FadeInSection"
import Link from "./common/Link"
import IntroVideo from "./IntroVideo"
import lighten from "../utils/lighten"

const FullPageSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${lighten(themeColors.secondary, -40)};
  /* background: linear-gradient(
    135deg,
    ${themeColors.primary} 0%,
    ${themeColors.secondary} 100%
  ); */
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

  @media (max-width: var(--column-width)) {
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
  max-width: var(--column-width);

  @media (max-width: var(--column-width)) {
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const SocialLinkGrid = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const SocialLink = styled(Link)`
  margin: 10px;
  padding: 0.5rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 100vh;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const SocialIcon = styled.i`
  color: ${(props) => props.color || "white"};
  margin-right: 5px;
`

const socialColors = {
  linkedin: "#0077b5",
  github: "#333",
  twitter: "#1da1f2",
  youtube: "#ff0000",
  facebook: "#3b5998",
  instagram: "#c13584",
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
        <SocialLinkGrid>
          {socialLinks.map(({ icon, infoText, link }) => (
            <SocialLink
              href={link}
              target="_blank"
              key={`social-icon-${icon}`}
              title={infoText}
              color={socialColors[icon]}
            >
              <>
                <SocialIcon
                  className={`bi-${icon}`}
                  color={socialColors[icon]}
                />
                {icon}
              </>
            </SocialLink>
          ))}
        </SocialLinkGrid>
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
