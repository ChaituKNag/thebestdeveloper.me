import { Container } from "@material-ui/core"
import { PlayCircleFilled } from "@material-ui/icons"
import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import { colors, themeColors } from "../config"

const VideoWrapper = styled(Container)`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  display: flex;
  width: 85vw;
  margin-top: 20px;
  max-height: 100%;
  border-radius: 10px;
  overflow: hidden;

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

const PlayIcon = styled(PlayCircleFilled)`
  font-size: 5vmax;
  text-align: center;
  color: black;
  z-index: 1;
  color: ${colors.youtube};
  filter: drop-shadow(3px 3px 3px ${themeColors.darkMain});
`

const IntroVideo = () => {
  return (
    <VideoWrapper maxWidth="md">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/gLn8BADTA5k"
        height="100%"
        width="100%"
        playing
        light
        playIcon={<PlayIcon />}
      />
    </VideoWrapper>
  )
}

export default IntroVideo
