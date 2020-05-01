import React from "react"
import { Typography, Grid } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import YoutubeIcon from "@material-ui/icons/YouTube"
import ExploreIcon from "@material-ui/icons/Explore"
import Link from "./common/Link"
import { colors } from "../config"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  subTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontFamily: "PT Sans",
  },
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(3),
  },
  text: {
    paddingBottom: theme.spacing(3),
  },
  facebook: { color: colors.facebook },
  twitter: { color: colors.twitter },
  instagram: { color: colors.instagram },
  github: { color: colors.github },
  youtube: { color: colors.youtube },
  map: { color: colors.map },
}))

const MoreAboutMe = () => {
  const classes = useStyles()
  return (
    <section>
      <Typography className={classes.text}>
        I live in Hyderabad, a beautiful and peaceful metropolitan city of the
        south Indian state of Telangana, find out more:
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
            href="https://goo.gl/maps/vzUPm5azbm6kMDvd8"
            target="_blank"
            className={classes.map}
          >
            <ExploreIcon className={classes.icon} />
          </Link>
        </Grid>
      </Grid>

      <Typography
        className={classes.subTitle}
        variant="h5"
        gutterBottom
        component="h3"
      >
        Education{" "}
        <span role="img" aria-label="The book symbol">
          📖
        </span>
      </Typography>

      <Typography className={classes.text}>
        I am a <u>Bachelor of Technology</u> graduate from{" "}
        <Link
          href="http://www.jntucek.org/About%20the%20College.htm"
          target="_blank"
        >
          JNTU College of Engineering, Kakinada
        </Link>
        .
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h5"
        gutterBottom
        component="h3"
      >
        Hobbies{" "}
        <span
          role="img"
          aria-label="The emoji's of shuttle, table tennis, a boy and a girl."
        >
          🏸 🏓 👦🏻 👧🏻
        </span>
      </Typography>
      <Typography className={classes.text}>
        I play shuttle badminton and table tennis frequently. My favorite thing
        to do is just spending time with my 6 year old son and 2 year old
        daughter.
      </Typography>
    </section>
  )
}

export default MoreAboutMe
