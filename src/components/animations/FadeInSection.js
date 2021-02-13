import React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const getVariants = (dir) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    x: dir === "left" ? -60 : 60,
  },
})

const FadeInSection = ({ dir, children }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={getVariants(dir)}>
      {children}
    </motion.div>
  )
}

FadeInSection.propTypes = {
  children: PropTypes.element.isRequired,
  dir: PropTypes.string,
}

FadeInSection.defaultProps = {
  dir: "left",
}

export default FadeInSection
