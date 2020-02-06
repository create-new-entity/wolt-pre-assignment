import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import TagChips from './components/TagChips';
import Restaurants from './components/Restaurants';

import {
  initializeRestaurantsAction,
  setRestaurantsAction
} from './reducers/restaurantsReducer';

import {
  changeSortOrderAction
} from './reducers/sortOrderReducer';

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    selectedTags: state.selectedTags,
    sortOrder: state.sortOrder
  };
};

const mapDispatchToProps = {
  initializeRestaurantsAction,
  setRestaurantsAction,
  changeSortOrderAction
};

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: 50
  },
  navBar: {
    width: window.innerWidth + 16,
    height: 80,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    background: 'rgba(229, 231, 233, 0.6)',
    textAlign: 'center'
  }
}));


const App = (props) => {
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    props.initializeRestaurantsAction();
  }, []);


  const classes = useStyles();
  let buttonText = (props.sortOrder === 'ascending') ? 'Sort Descending' : 'Sort Ascending';
  let tagChips = (showTags ? (<TagChips/>) : null);

  return (
    <div>

      <div className={classes.navBar}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 30 }}
          onClick={() => {
            props.changeSortOrderAction({
              'currentOrder': props.sortOrder,
              'restaurants': props.restaurants
            })
          }}
        > { buttonText } </Button>
        <Button
          variant="contained"
          color={showTags ? "secondary" : "primary"}
          style={{ marginTop: 30, marginLeft: 10 }}
          onClick={() => setShowTags(!showTags)}
        > Tags </Button>
      </div>
      
      { tagChips }
      <Restaurants/>
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
