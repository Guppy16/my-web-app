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
import SimpleHeroUnit from "./components/SimpleHeroUnit.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
  {
    imgURL: "https://source.unsplash.com/random",
    imgTitle: "https://source.unsplash.com/random",
    link: "/Books",
    title: "Books",
    desc: "The very few list of books I've completed",
  }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.root}>
        <SimpleHeroUnit
          title="Akash Gupta"
          subtitle="Insert cool statement"
        />
        {/* <Container maxWidth="sm">
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
        </Container> */}
        {/* Social Media stuff */}
        <Social />
        {/* Cards for other sites */}
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
