import React from "react"
import { animated, useSpring, config } from "react-spring"

const FadeInContainer = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    left: 0,
    position: "relative",
    from: {
      opacity: 0,
      left: 60,
    },
    config: config.slow,
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default FadeInContainer
