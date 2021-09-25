import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn, School } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2),
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    textAlign: "center",
    backgroundColor: blue[50],
  },
}));

export default function SocialMediaBanner() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <IconButton
          className={classes.button}
          href="https://github.com/guppy16"
          title="HubGit"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          className={classes.button}
          href="https://www.linkedin.com/in/akash--gupta/"
          title="InLinked"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          className={classes.button}
          href="https://www.undergraduate.study.cam.ac.uk/courses/engineering"
          title="Cambridge of University"
        >
          <School fontSize="large" />
        </IconButton>
      </div>
    </React.Fragment>
  );
}
