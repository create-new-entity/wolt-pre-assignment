import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'uuid';

import Restaurant from './Restaurant';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: 50
  }
}));


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

export default Restaurants;