import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    toolbar: theme.mixins.toolbar,
});

class RecipeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {
    const { classes, recipe } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {recipe.food_name.substring(0, 1)}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.food_name}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography>
            Ingredients:
          </Typography>
          {recipe.ingredients.map((ingredient, index) => (
            <Typography component="p" key={index}>
              {ingredient}
            </Typography>
          ))}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classNames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Method:
            </Typography>
            <Typography paragraph>
              {recipe.procedure}
            </Typography>
            <Typography paragraph>
              Calorie Count: {recipe.cal_count}
            </Typography>
            <Typography paragraph>
              Allergens: {recipe.allergens}
            </Typography>
            <Typography>
              Sugar Count: {recipe.sugar_count}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeCard);
