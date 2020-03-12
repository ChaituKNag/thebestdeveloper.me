import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;
`

const RoundedImg = styled.div`
  border-radius: 50%;
  max-width: 300px;
  box-shadow: 10px 10px 15px -5px lightgrey;
  border: 10px solid white;
  overflow: hidden;
  flex: 1;
`

const RoundedProfileAvatar = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      imageSharp(id: { eq: "c9f392eb-3356-501e-ab90-6e5173d12ef2" }) {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <ContainerDiv>
      <RoundedImg>
        <Img
          fluid={data.imageSharp.fluid}
          alt="Naga Chaitanya Konada's profile pic"
        />
      </RoundedImg>
    </ContainerDiv>
  )
}

export default RoundedProfileAvatar
