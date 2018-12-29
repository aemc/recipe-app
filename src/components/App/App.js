import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import { Redirect } from "react-router";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  textAlign: "center"
});

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Switch>
            <Route
              name="dashboard"
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <Route render={() => <Redirect to={"/dashboard"} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);
