import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const getStyledText = (ele) => styled(ele)`
  margin: 1rem 0 0.5rem;
  color: ${(props) => props.color};
`

const Text = ({ color, as, ...rest }) => {
  const StyledComponent = getStyledText(as)

  return <StyledComponent color={color} {...rest} />
}

Text.propTypes = {
  color: PropTypes.string,
  as: PropTypes.string,
}

Text.defaultProps = {
  color: "inherit",
  as: "p",
}

export default Text
