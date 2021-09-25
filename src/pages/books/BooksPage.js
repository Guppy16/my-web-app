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
import { Cake, ExpandMore, List, FormatListNumbered } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import Footer from "../../components/StickyFooter.js";
import books_list from "./books_list.js";
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
    maxHeight: "50em",
    flexDirection: "column",
  },
  cardMedia: {
    width: "70%",
    // alignSelf: "center"
    padding: "16px"
  },
  cardContent: {
    flexGrow: 1,
    height: "100%",
    // paddingTop: "5px"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BooksPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(
    Array(books_list.length).fill(false)
  );

  const handleExpandClick = (idx) => {
    setExpanded(
      expanded.slice(0, idx).concat(!expanded[idx], expanded.slice(idx + 1))
    );
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <main className={classes.root}>
          <SimpleHeroUnit
            title="Books"
            subtitle="The very few list of books I've completed"
          />
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {books_list.map((book, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={book.name}
                      subheader={book["date-finished"]}
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      // image={food.img} // img ~ "/static/images/cake.jpg"
                      image={book.img}
                      title={book.name}
                      component='img'
                    />
                    
                    <CardContent className={classes.cardContent}>
                      {book.thoughts.map((text, idx) => (
                        <Typography>{text}</Typography>
                      ))}
                    </CardContent>
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
