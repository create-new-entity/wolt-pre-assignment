import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';



import restaurantData from './restaurants.json';
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
  const [selectedTags, setSelectedTags] = useState([]);
  
  const tags = useRef(
    restaurantData.restaurants
      .sort((a, b) => a.name.localeCompare(b.name))
      .reduce((accArr, currObj) => {
        currObj.tags.forEach(tag => {
          if(accArr.indexOf(tag) === -1) accArr.push(tag);
        });
        return accArr;
      }, [])).current;

  useEffect(() => {
    props.initializeRestaurantsAction();
  }, []);

  const onTagSelect = (tag) => {
    let newSelectedTags = selectedTags.concat(tag);
    let newRestaurants = props.restaurants.filter((restaurant) => {
      return restaurant.tags.some((tag) => newSelectedTags.indexOf(tag) !== -1);
    });

    setSelectedTags(newSelectedTags);
    props.setRestaurantsAction(newRestaurants);
  };

  const onTagDeselect = (tag) => {
    let newSelectedTags = selectedTags.filter((currTag) => currTag !== tag);
    let newRestaurants;
    if(newSelectedTags.length){
      newRestaurants = props.restaurants.filter((restaurant) => {
        return restaurant.tags.some((tag) => newSelectedTags.indexOf(tag) !== -1);
      });
    }
    else {
      newRestaurants = restaurantData.restaurants.sort((a, b) => a.name.localeCompare(b.name));
      if(props.sortOrder === 'descending') newRestaurants = newRestaurants.reverse();
    }

    setSelectedTags(newSelectedTags);
    props.setRestaurantsAction(newRestaurants);
  };

  const classes = useStyles();
  let buttonText = (props.sortOrder === 'ascending') ? 'Sort Descending' : 'Sort Ascending';

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

      </div>

      <Restaurants/>

      <TagChips tags={tags}/>
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
