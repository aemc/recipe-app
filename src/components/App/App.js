import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import { Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App;
