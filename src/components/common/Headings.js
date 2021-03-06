import React from "react"
import Text from "../styled/Text"

export const PageTitle = ({ children, ...restProps }) => {
  return (
    <Text as="h2" {...restProps}>
      {children}
    </Text>
  )
}

export const SectionTitle = ({ children, ...restProps }) => {
  return (
    <Text as="h3" {...restProps}>
      {children}
    </Text>
  )
}

export const ItemTitle = (props) => {
  return <Text as="h3" {...props}></Text>
}
