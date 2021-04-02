import React from "react"
import { CommonGlobalStyles } from "../src/global-styles"
export const decorators = [
  (Story) => (
    <>
      <CommonGlobalStyles />
      <Story />
    </>
  ),
]
