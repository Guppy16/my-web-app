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
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [
  {
    imgURL: "https://source.unsplash.com/random",
    imgTitle: "Food for thought",
    link: "/Food",
    title: "Food",
    desc: "Recipes of Disaster",
  },
  {
    imgURL:
      "https://fonts.gstatic.com/s/i/materialicons/extension/v6/24px.svg?download=true",
    imgTitle: "Build ur imagination",
    link: "https://github.com/Guppy16/rpi-access-point-no-bridge",
    title: "Projects",
    desc: "Cool things to do in life",
  },
  {
    imgURL: "https://source.unsplash.com/random",
    imgTitle: "https://source.unsplash.com/random",
    link: "https://source.unsplash.com/random",
    title: "Prep",
    desc: "Problem solving questions",
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.root}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Akash Gupta
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Why are you even here...smh
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="https://knowdemics.com/"
                  >
                    Don't Click Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://repl.guppy16.ml"
                  >
                    ...
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}
        <Social />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea href={card.link}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.imgURL}
                      title={card.imgTitle}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>{card.desc}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
