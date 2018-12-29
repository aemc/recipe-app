import React from "react";
import ReactDOM from "react-dom";
import { jss, JssProvider } from "react-jss";

import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { theme } from "./config/muiTheme";

import { createGenerateClassName } from "@material-ui/core/styles";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const generateClassName = createGenerateClassName();

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById("root")
);
registerServiceWorker();
