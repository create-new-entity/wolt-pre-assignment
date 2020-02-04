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
    justifyContent: 'center',
    margin: 0,
    [theme.breakpoints.down(415)]: {
      padding: 0
    }
  },
  paper: {
    width: 235,
    height: 235,
    paddingTop: 15,
    [theme.breakpoints.down(415)]: {
      width: window.innerWidth,
      height: 95,
      paddingTop: 0
    }
  },
  paperContentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(415)]: {
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center'
    }
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    [theme.breakpoints.down(415)]: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down(415)]: {
      flex: 3,
      justifyContent: 'start',
      alignItems: 'center'
    }
  },
  thumbnail: {
    width: 100,
    height: 125,
    objectFit: 'cover',
    [theme.breakpoints.down(415)]: {
      width: 92,
      height: 69
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
            <Box className={classes.textContainer}>
              <p>
                {
                  data.name
                }
              </p>
            </Box>
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
