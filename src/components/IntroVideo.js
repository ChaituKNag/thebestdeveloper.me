import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import PropTypes from "prop-types"

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  display: flex;
  width: 85vw;
  margin-top: 20px;
  max-height: 100%;
  border-radius: 10px;
  overflow: hidden;
  max-width: 600px;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    max-height: calc(100vh - 40px);
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: 960px) {
    width: 96vw;
  }
`

const IntroVideo = ({ url, coverImage }) => {
  return (
    <VideoWrapper>
      <ReactPlayer
        className="react-player"
        url={url}
        height="100%"
        width="100%"
        playing
        light={coverImage}
      />
    </VideoWrapper>
  )
}

IntroVideo.propTypes = {
  url: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
}

export default IntroVideo
