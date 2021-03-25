import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
import { Cake, ExpandMore, List, FormatListNumbered, Autorenew } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import Footer from "../../components/StickyFooter.js";
import food_items from "./food_items.js";
import SimpleHeroUnit from "../../components/SimpleHeroUnit.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    margin: "auto",
    height: "100%",
    display: "flex",
    maxWidth: 345,
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 10,
  },
  cardContent: {
    flexGrow: 1,
  },
  expand: {
    transform: "rotate(0deg)",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const foodTypeIcon = {
  cake: <Cake />,
};

export default function FoodPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <main className={classes.root}>
          <SimpleHeroUnit
            title="Recipes of Disaster"
            subtitle="Insert some anime cooking reference"
          />
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {food_items.map((food, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {foodTypeIcon[food.type]}
                        </Avatar>
                      }
                      title={food.name}
                      subheader={food.date}
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      // image={food.img} // img ~ "/static/images/cake.jpg"
                      title={food.name}
                    />
                    <CardActions disableSpacing>
                      <IconButton
                        // Select class based on state of expanded
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMore />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="h5">Ingredients</Typography>
                        <br />
                        {food.ingredients.map(
                          ({ amount, unit, stuff }, idx) => (
                            <Typography>
                              {amount} {unit} {stuff}
                            </Typography>
                          )
                        )}

                        <br />
                        <Typography variant="h5">Instructions</Typography>
                        <br />
                        {food.instructions.map((instruction, idx) => (
                          <Typography>{instruction}</Typography>
                        ))}
                      </CardContent>
                    </Collapse>
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
