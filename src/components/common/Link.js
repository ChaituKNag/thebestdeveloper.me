import React from "react"
import GatsbyLink from "gatsby-link"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"

function isInternalLink(href) {
  return href.startsWith("/")
}

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
        <OutboundLink href={href} {...targetProps} {...restProps}>
          {children}
        </OutboundLink>
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
