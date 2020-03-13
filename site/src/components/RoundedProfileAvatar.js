import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 30px;

  @media (max-width: 960px) {
    margin-top: 20px;
    margin-left: 0;
  }
`

const RoundedImg = styled.div`
  border-radius: 50%;
  max-width: 300px;
  width: 300px;
  box-shadow: 10px 10px 15px -5px lightgrey;
  border: 10px solid white;
  overflow: hidden;
  flex: 1;
`

const RoundedProfileAvatar = () => {
  const data = useStaticQuery(graphql`
    query ProfileAvatarQuery {
      file(relativePath: { eq: "smiley-with-coat.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ContainerDiv>
      <RoundedImg>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Naga Chaitanya Konada's profile pic"
        />
      </RoundedImg>
    </ContainerDiv>
  )
}

export default RoundedProfileAvatar
