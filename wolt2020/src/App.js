import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import restaurantData from './restaurants.json';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: 100
  },
  navBar: {
    width: window.innerWidth + 16,
    height: 100,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    background: 'rgba(229, 231, 233, 0.6)',
    textAlign: 'center'
  },
  paper: {
    width: 235,
    height: 235,
    [theme.breakpoints.down(415)]: {
      width: window.innerWidth - 20,
      height: 95
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
const [restaurants, setRestaurants] = useState(restaurantData.restaurants.sort((a, b) => a.name.localeCompare(b.name)));
const [buttonText, setButtonText] = useState('Sort Descending');

const sortHandler = () => {
  (buttonText === 'Sort Descending') ? setButtonText('Sort Ascending') : setButtonText('Sort Descending');
  let newArr = [...restaurants];
  setRestaurants(newArr.reverse());
};

  const classes = useStyles();
  let restaurantsComponent = restaurants.map((data, index) => {
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
    <div>
      <div className={classes.navBar}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 50 }}
          onClick={sortHandler}
        >
          {
            buttonText
          }
        </Button>
      </div>
      <Grid
        className={classes.root}
        container
        spacing={2}
      >
        {
          restaurantsComponent
        }
      </Grid>
    </div>
  );
}

export default App;
