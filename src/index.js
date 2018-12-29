import React from "react";
import ReactDOM from "react-dom";
import { jss, JssProvider } from "react-jss";

import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { theme } from "./config/muiTheme";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createGenerateClassName } from "@material-ui/core/styles";

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
