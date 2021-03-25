import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 1, 0),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleHeroUnit({ title, subtitle }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline>
        {/* Hero Unit */}
        <Container className={classes.heroContent} maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {subtitle}
          </Typography>
        </Container>
        {/**End Hero Unit */}
      </CssBaseline>
    </React.Fragment>
  );
}
