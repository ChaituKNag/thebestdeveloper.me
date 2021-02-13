import React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const fadeInVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 60,
  },
}

const FadeInContainer = ({ children }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      {children}
    </motion.div>
  )
}

FadeInContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

export default FadeInContainer
