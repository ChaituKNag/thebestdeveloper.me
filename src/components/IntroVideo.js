import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
  display: flex;
  width: 85vw;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 960px) {
    width: 96vw;
  }
`

const IntroVideo = () => {
  return (
    <VideoWrapper>
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/PylilPZoF40"
        height="100%"
        width="100%"
        playing
        controls
      />
    </VideoWrapper>
  )
}

export default IntroVideo
