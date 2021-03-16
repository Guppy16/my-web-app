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
import Footer from "../../components/StickyFooter.js";

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
}));

// Data structure for each food item
const foods = [
  {
    name: "Chocolate Coffec Cake",
		link: "/Food",
    ingredients: [
      {
        amount: 1.5,
        unit: "cups",
        stuff: "flour", // specific type?
      },
      {
        amount: 1.5,
        unit: "cups",
        stuff: "white sugar",
      },
      {
        amount: 0.5,
        unit: "cups",
        stuff: "cocoa powder",
      },
      {
        amount: 1.5,
        unit: "teaspoon",
        stuff: "baking powder",
      },
      {
        amount: 1.5,
        unit: "teaspoon",
        stuff: "salt",
      },
      {
        amount: "1/3",
        unit: "cups",
        stuff: "vegetable oil",
      },
      {
        amount: 1,
        unit: "large",
        stuff: "egg",
      },
      {
        amount: 1,
        unit: "tablespoon",
        stuff: "vanilla extract",
      },
      {
        amount: "3/4",
        unit: "cups",
        stuff: "milk",
      },
      {
        amount: "3/4",
        unit: "cups",
        stuff: "boiling water with instant coffee",
      },
    ],
    instructions: [],
  },
];

export default function FoodPage() {
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
                Recipes of Disaster
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Insert some anime cooking reference
              </Typography>
            </Container>
          </div>
          {/**End Hero Unit */}
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {foods.map((food, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardActionArea href={food.link}>
											<CardMedia
												className={classes.cardMedia}
												title={food.name}
											/>
										</CardActionArea>
									</Card>
								</Grid>
              ))}
            </Grid>
          </Container>
          <Footer />
        </main>
      </CssBaseline>
    </React.Fragment>
  );
}
