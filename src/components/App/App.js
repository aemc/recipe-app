import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import { Redirect } from "react-router";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  container: {
    textAlign: "center"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
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
