import React from "react"
import Text from "../styled/Text"
import PropTypes from "prop-types"

const Section = ({ title, children, ...restProps }) => {
  return (
    <div {...restProps}>
      <Text as="h2">{title}</Text>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Section
