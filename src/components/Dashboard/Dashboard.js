import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid/Grid";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./Dashboard.css";
import SearchAppBar from "../SearchAppbar/SearchAppbar";
import RecipeCard from "../RecipeCards/RecipeCards";
import { list_recipes } from "../../config/RecipeList";
import Typography from "@material-ui/core/Typography/Typography";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false, display: false };
  }

  handleBooleanToggle = event => {
    if (event.target.value === 'cheese') {
      this.setState({
        display: true
      })
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SearchAppBar handleBooleanToggle={this.handleBooleanToggle} />

        <div className={classes.toolbar} />

        {this.state.display && (
          <Grid container alignContent="center">
            {list_recipes.map((recipe, index) => {
              return (
                <Grid
                  item
                  key={index}
                  className={classes.cardPadding}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <RecipeCard recipe={recipe} />
                </Grid>
              );
            })}
          </Grid>
        )}
        {!this.state.display &&
          <div className={classes.defaultMsg}>
            <Typography>
              No Recipes To Show
            </Typography>
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
