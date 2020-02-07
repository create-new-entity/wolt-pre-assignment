import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  paper: {
    width: 275,
    height: 240,
    [theme.breakpoints.down(415)]: {
      width: window.innerWidth - 10,
      height: 95
    },
    backgroundColor: 'rgb(237, 255, 171)'
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
  statusContainer: {
    color: 'white',
    borderRadius: 5,
    marginTop: 5,
    [theme.breakpoints.down(415)]: {
      marginRight: 5
    }
  },
  thumbnail: {
    width: 200,
    height: 150,
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
            <p style={{margin: 0}}>
              {
                restaurant.name
              }
            </p>
          </Box>
          <Box style={{backgroundColor: restaurant.online ? 'rgb(33, 95, 48, 0.8)' : 'rgb(114, 54, 37, 0.8)'}} className={classes.statusContainer}>
            <p style={{margin: 0, padding: 6}}> {restaurant.online ? 'Online' : 'Offline'}</p>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Restaurant;