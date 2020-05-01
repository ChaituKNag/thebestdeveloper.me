import React from "react"
import { Typography, Grid } from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
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
        <Grid item>
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
        Or, I am available to talk over phone any time between 8am and 10pm
        Indian Standard Time. Just check time difference{" "}
        <Link
          href="https://www.timeanddate.com/time/difference/india/hyderabad"
          target="_blank"
        >
          here
        </Link>{" "}
        and call me by clicking on the below icon: .
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
          <a href="tel:+918125636944" className={classes.telephone}>
            <PhoneAndroidIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactInfo
