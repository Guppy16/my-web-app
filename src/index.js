import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import FormPage from "./FormPage.js";
import FoodPage from "./pages/food/FoodPage.js";
import BooksPage from "./pages/books/BooksPage.js";
import MagicMirrorPage from "./pages/magicmirror/MagicMirrorPage.js";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/Badminton" component={FormPage} exact={true} />
        <Route path="/Food" component={FoodPage} exact={true} />
        <Route path="/Books" component={BooksPage} exact={true} />
        <Route path="/MagicMirror" component={MagicMirrorPage} exact={true} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
