import React from "react"
import FullpageSection from "../components/FullpageSection"
import FloatingHeader from "../components/FloatingHeader"

const profile = () => {
  return (
    <>
      <FloatingHeader />
      <FullpageSection bgColor="pink" color="black">
        <h2>This is a full page section.</h2>
      </FullpageSection>
      <FullpageSection bgColor="#333" color="white">
        <h2>This is a second page section.</h2>
      </FullpageSection>
      <FullpageSection bgColor="violet" color="#333">
        <h2>This is a third page section.</h2>
      </FullpageSection>
      <FullpageSection bgColor="#teal" color="white">
        <h2>This is a fourth page section.</h2>
      </FullpageSection>
    </>
  )
}

export default profile
