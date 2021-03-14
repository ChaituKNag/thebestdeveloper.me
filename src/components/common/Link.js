import React from "react"
import GatsbyLink from "gatsby-link"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themeColors } from "../../config"

function isInternalLink(href) {
  return href.startsWith("/")
}

const StyledOutboundLink = styled(OutboundLink)`
  color: ${themeColors.primary};
`

const Link = ({ href, children, target = "_self", ...restProps }) => {
  const targetProps =
    target === "_blank"
      ? {
          target,
          rel: "noopener",
        }
      : { target }
  return (
    <>
      {isInternalLink(href) ? (
        <GatsbyLink to={href} {...restProps}>
          {children}
        </GatsbyLink>
      ) : (
        <StyledOutboundLink href={href} {...targetProps} {...restProps}>
          {children}
        </StyledOutboundLink>
      )}
    </>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  target: PropTypes.string,
}

export default Link
