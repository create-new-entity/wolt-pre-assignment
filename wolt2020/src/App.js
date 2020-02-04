import React from 'react';
import { Blurhash } from 'react-blurhash';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import restaurantData from './restaurants.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    width: 235,
    height: 225,
    [theme.breakpoints.down('sm')]:{
      width: 500,
      height: 250
    }
  },
  thumbnail: {
    width: 100,
    height: 125,
    paddingTop: 15,
    objectFit: 'cover'
  },
  smallscreen: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block'
    }
  }
}));


const App = (props) => {
  const classes = useStyles();
  let restaurants = restaurantData.restaurants.map((data, index) => {
    return (
      <Grid item key={index}>
        <Paper elevation={3} className={classes.paper}>
          <img
            src={data.image}
            alt='restaurant'
            className={`${classes.thumbnail}`}
          />
          <p className={`${classes.smallscreen}`}>
            {
              data.name
            }
          </p>
        </Paper>
      </Grid>
    );
  });
  return (
    <div className="App">
      <hr></hr>
      <Grid
        className={classes.root}
        container
        spacing={2}
        justify='space-between'
      >
        {
          restaurants
        }
      </Grid>
    </div>
  );
}

export default App;
