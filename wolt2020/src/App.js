import React from 'react';
import { Blurhash } from 'react-blurhash';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import restaurantData from './restaurants.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center'
  },
  paper: {
    width: 235,
    height: 210,
    [theme.breakpoints.down(600)]:{
      width: 500,
      height: 250
    }
  },
  paperContentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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
          <Box className={classes.paperContentsContainer}>
            <Box className={classes.imageContainer}>
              <img
                src={data.image}
                alt='restaurant'
                className={`${classes.thumbnail}`}
              />
            </Box>
            <p>
              {
                data.name
              }
            </p>
          </Box>
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
      >
        {
          restaurants
        }
      </Grid>
    </div>
  );
}

export default App;
