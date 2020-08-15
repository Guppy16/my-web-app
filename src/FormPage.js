import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import Social from "./components/SocialMediaBanner.js";
import SimpleForm from "./components/SimpleForm.js";
import Footer from "./components/StickyFooter.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 10,
  },
  cardContent: {
    flexGrow: 1,
  },
  formLayout: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    //minWidth: "5ch",
    maxWidth: "100ch",
    marginLeft: "auto",
    marginRight: "auto",
    //padding: 50,
  },
}));

export default function FormPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline>
        <main className={classes.root}>
          {/* Hero Unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Badminton
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                ...Been a while
              </Typography>
            </Container>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdOP_o0J8tQt23KS5UzG_mlMKzeKQ7SlYnoRt4zksuuEhqTrQ/viewform?embedded=true"
            width="auto"
            height="700"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className={classes.formLayout}
          >
            Loading…
          </iframe>
          {/* <SimpleForm /> */}
          <Footer />
        </main>
      </CssBaseline>
    </React.Fragment>
  );
}
