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
  TextField,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
		//minWidth: "5ch",
		maxWidth: "100ch",
    marginLeft: "auto",
		marginRight: "auto",
		padding: 50,
  },
  submitButton: {
    marginTop: theme.spacing(4),
    width: "20%",
  },
}));

export default function SimpleForm() {
  const [value, setValue] = React.useState("Fill in words for skribblio");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline>
        <form onSubmit={onSubmit} className={classes.root}>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            paragraph
          >
            Fill in a bunch of words you want to skribblio!
          </Typography>

          <TextField
            id="words-list"
            label="skribblio words"
            multiline
            placeholder={"badminton\nshuttle\n..."}
            rows={4}
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </CssBaseline>
    </React.Fragment>
  );
}
