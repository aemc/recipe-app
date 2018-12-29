import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid/Grid";
import { withStyles } from "@material-ui/core/styles";

import SearchAppBar from "../SearchAppbar/SearchAppbar";
import RecipeCard from "../RecipeCards/RecipeCards";
import { list_recipes } from "../../config/RecipeList";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  cardPadding: {
    padding: 16
  },
  defaultMsg: {
    padding: 32
  }
});

class Dashboard extends React.Component {
  state = {
    expanded: false,
    display: false
  };

  handleBooleanToggle = e => {
    if (e.target.value === "cheese") {
      this.setState({
        display: true
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { display } = this.state;

    return (
      <div className={classes.root}>
        <SearchAppBar handleBooleanToggle={this.handleBooleanToggle} />

        <div className={classes.toolbar} />

        {display && (
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
        {!display && (
          <div className={classes.defaultMsg}>
            <Typography>No Recipes To Show</Typography>
          </div>
        )}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.obj
};

export default withStyles(styles)(Dashboard);
