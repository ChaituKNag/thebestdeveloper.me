import React from "react"
import { animated, useSpring, config } from "react-spring"

const FadeInContainer = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: {
      opacity: 0,
      marginLeft: 200,
    },
    config: config.slow,
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default FadeInContainer
