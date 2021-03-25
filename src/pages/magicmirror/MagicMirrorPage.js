import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
  Container,
  CardHeader,
  Collapse,
} from "@material-ui/core";
import {
  Cake,
  ExpandMore,
  List,
  FormatListNumbered,
  Autorenew,
} from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import SimpleHeroUnit from "../../components/SimpleHeroUnit.js";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column"
  },
}));

export default function MagicMirrorPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <main className={classes.root}>
            <SimpleHeroUnit
              title="Magic Mirror"
              subtitle="Work in progress. This page is what I'd put on my magic mirror"
            />
          </main>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}
