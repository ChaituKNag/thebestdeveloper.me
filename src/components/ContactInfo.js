import React, { useState } from "react"
import styled from "styled-components"
import Text from "./styled/Text"
import SolidButton from "./styled/Button"
import { Input, Label, Textarea } from "./styled/Field"
import { colors } from "../config"

const StyledSection = styled.section`
  background-color: ${colors.bdazzledBlue};
  color: ${colors.babyPowder};
  padding: 2rem;
  border-radius: 1rem;

  label {
    font-weight: normal;
    color: ${colors.white};
  }
`

const StyledFormField = styled.div`
  margin: 1rem 0;
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactInfo = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
      "form-name": e.target.getAttribute("name"),
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }
    fetch("https://thebestdeveloper.netlify.app/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
      mode: "no-cors",
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((error) => alert(error))
  }

  if (submitted) {
    return (
      <>
        <Text>Success!</Text>
        <Text>
          Thanks for contacting me. Now, sit back and relax. I will definitely
          reach out to you.
        </Text>
      </>
    )
  }
  return (
    <StyledSection>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        name="contact-thebestdeveloper"
        method="post"
        data-netlify={true}
      >
        <Text>Please let me know what is on your mind:</Text>
        <StyledFormField>
          <Label>your name</Label>
          <Input simple name="name" required />
        </StyledFormField>
        <StyledFormField>
          <Label>and your email</Label>
          <Input simple name="email" type="email" required />
        </StyledFormField>
        <StyledFormField>
          <Label>and what would you like to tell me</Label>
          <Textarea simple name="message" required />
        </StyledFormField>
        <SolidButton type="submit">Send</SolidButton>
      </form>
    </StyledSection>
  )
}

export default ContactInfo
