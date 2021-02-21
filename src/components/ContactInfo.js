import React, { useState } from "react"
import { Button, TextField, Typography } from "@material-ui/core"
import styled from "styled-components"

import EmailIcon from "@material-ui/icons/Email"
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid"

import { colors } from "../config"

import { makeStyles } from "@material-ui/styles"

import Link from "./common/Link"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(3),
  },
  text: {
    paddingBottom: theme.spacing(3),
  },
  linkedin: { color: colors.linkedin },
  email: { color: colors.email },
  telephone: { color: colors.telephone },
  field: {
    boxSizing: "border-box",
    width: "100%",
    borderRadius: "4px",
    color: colors.babyPowder,
  },
  successMsg: {
    color: theme.palette.primary.main,
  },
}))

const StyledFormField = styled.div`
  margin: 1rem 0;
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactInfo = () => {
  const classes = useStyles()
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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => {
        console.log("submitted", formData)
        setSubmitted(true)
      })
      .catch((error) => alert(error))
  }

  if (submitted) {
    return (
      <>
        <Typography gutterBottom className={classes.successMsg}>
          Success!
        </Typography>
        <Typography>
          Thanks for contacting me. Now, sit back and relax. I will definitely
          reach out to you.
        </Typography>
      </>
    )
  }
  return (
    <section>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        name="contact-thebestdeveloper"
        method="post"
        data-netlify={true}
      >
        <Typography>Please let me know what is on your mind:</Typography>
        <StyledFormField>
          <TextField
            name="name"
            color="primary"
            className={classes.field}
            label="your name"
            variant="outlined"
            required
          />
        </StyledFormField>
        <StyledFormField>
          <TextField
            name="email"
            className={classes.field}
            label="and your email"
            type="email"
            variant="outlined"
            required
          />
        </StyledFormField>
        <StyledFormField>
          <TextField
            name="message"
            className={classes.field}
            label="and what you like to say"
            multiline
            rows={4}
            variant="outlined"
            required
          />
        </StyledFormField>
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </section>
  )
}

export default ContactInfo
