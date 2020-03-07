import React from "react"
import { Typography, Grid } from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid"

import { makeStyles } from "@material-ui/styles"

import Link from "./common/Link"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(3),
  },
  text: {
    paddingBottom: theme.spacing(3),
  },
  linkedin: { color: "#0077B5" },
  email: { color: "#0078D4" },
  telephone: { color: "#0C1754" },
}))

const ContactInfo = () => {
  const classes = useStyles()
  return (
    <section>
      <Typography className={classes.text}>
        Do you wish to connect with me personally about working with you?
        LinkedIn:
      </Typography>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/nagachaitanyakonada/"
            target="_blank"
            className={classes.linkedin}
          >
            <LinkedInIcon className={classes.icon} />
          </Link>
        </Grid>
      </Grid>

      <Typography className={classes.text}>
        Are you a lover of the good old email conversations? Mail me to
        knc@outlook.in by clicking on the below icon.
      </Typography>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
      >
        <Grid item alignItems="center">
          <Link
            href="mailto:knc@outlook.in?subject=Hi Naga!"
            target="_blank"
            className={classes.email}
          >
            <EmailIcon className={classes.icon} />
          </Link>
        </Grid>
      </Grid>

      <Typography className={classes.text}>
        Or, you know what! Call me directly.
      </Typography>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
      >
        <Grid item alignItems="center">
          <a href="tel:+918125636944" className={classes.telephone}>
            <PhoneAndroidIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactInfo
