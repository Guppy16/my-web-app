// Code taken from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sticky-footer/StickyFooter.js

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CssBaseline,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import logo from "../assets/logo.svg";
import { Dns } from "@material-ui/icons";
import "../assets/App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Guppy16/my-web-app">
        Guppy16
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper
  },
  footer: {
    padding: theme.spacing(3, 0),
    marginTop: "auto",
    textAlign: "center",
  },
  sponsors: {
    padding: theme.spacing(1),
    flexDirection: "row",
    display: "flex",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Container className={classes.sponsors}>
            <Container>
              <Typography variant="caption">Powered by React</Typography>
              <img src={logo} className="App-logo" alt="logo" title="ReactJS" href="https://reactjs.org/"/>
            </Container>
            <Container>
              <Typography variant="caption">Hosted on Firebase</Typography>
            </Container>
            <Container>
              <Typography variant="caption">Domain from Freenom</Typography>
              <IconButton href="https://www.freenom.com/" title="Freenom">
                <Dns />
              </IconButton>
            </Container>
          </Container>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
