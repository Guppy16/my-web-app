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
import FoodImg from "./pages/food/food.jpg"
import MagicMirrorImg from "./pages/magicmirror/magicmirror.jpeg";
import PrepImg from "./pages/prep/prep.jpg"
import ProjectImg from "./pages/drone.jpg"
import BooksImg from "./pages/books/books.jpg"

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
    imgURL: BooksImg,
    imgTitle: "https://source.unsplash.com/random",
    link: "/Books",
    title: "Books",
    desc: "The very few list of books I've completed",
  },
  {
    imgURL: ProjectImg,
    imgTitle: "Build ur imagination",
    link: "https://github.com/Guppy16/hello-world",
    title: "Projects",
    desc: "Cool things to do in life",
  },
  {
    imgURL: FoodImg,
    imgTitle: "Food for thought",
    link: "/Food",
    title: "Food",
    desc: "Recipes of Disaster",
  },
  {
    imgURL: PrepImg,
    imgTitle: "https://source.unsplash.com/random",
    link: "https://source.unsplash.com/random",
    title: "Prep",
    desc: "Problem solving questions",
  },
  {
    imgURL: MagicMirrorImg,
    imgTitle: "Mirror Magic",
    link: "/MagicMirror",
    title: "Magic Mirror",
    desc: "The page I'd put on my magic mirror",
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.root}>
        <SimpleHeroUnit title="Akash Gupta" subtitle="Insert cool statement" />
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
