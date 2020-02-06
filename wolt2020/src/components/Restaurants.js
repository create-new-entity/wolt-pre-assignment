import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'uuid';

import Restaurant from './Restaurant';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: 110
  }
}));

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
};


const Restaurants = ({ restaurants }) => {
  const classes = useStyles();

  let restaurantsComponents = restaurants.map((restaurant) => {
    return <Restaurant key={uuid.v4()} restaurant={restaurant}/>;
  });

  return (
    <Grid
        className={classes.root}
        container
        spacing={2}
      >
        {
          restaurantsComponents
        }
    </Grid>
  );
};

export default connect(mapStateToProps)(Restaurants);