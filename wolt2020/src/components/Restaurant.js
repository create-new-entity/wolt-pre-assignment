import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  paper: {
    width: 265,
    height: 215,
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

const Restaurant = ({ restaurant }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper elevation={3} className={classes.paper}>
        <Box className={classes.paperContentsContainer}>
          <Box className={classes.imageContainer}>
            <img
              src={restaurant.image}
              alt='restaurant'
              className={`${classes.thumbnail}`}
            />
          </Box>
          <Box className={classes.textContainer}>
            <p>
              {
                restaurant.name
              }
            </p>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Restaurant;