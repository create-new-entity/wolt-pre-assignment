import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import restaurantData from './restaurants.json';
import TagChips from './components/TagChips';
import Restaurants from './components/Restaurants';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: 50
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
  }
}));


const App = (props) => {
const [restaurants, setRestaurants] = useState(restaurantData.restaurants.sort((a, b) => a.name.localeCompare(b.name)));
const [buttonText, setButtonText] = useState('Sort Descending');
const [selectedTags, setSelectedTags] = useState([]);

const tags = useRef(
  restaurants.reduce((accArr, currObj) => {
  currObj.tags.forEach(tag => {
    if(accArr.indexOf(tag) === -1) accArr.push(tag);
  });
  return accArr;
}, [])).current;

const onTagSelect = (tag) => {
  let newSelectedTags = selectedTags.concat(tag);
  let newRestaurants = restaurants.filter((restaurant) => {
    return restaurant.tags.some((tag) => newSelectedTags.indexOf(tag) !== -1);
  });

  setSelectedTags(newSelectedTags);
  setRestaurants(newRestaurants);
};

const onTagDeselect = (tag) => {
  let newSelectedTags = selectedTags.filter((currTag) => currTag !== tag);
  let newRestaurants;
  if(newSelectedTags.length){
    newRestaurants = restaurants.filter((restaurant) => {
      return restaurant.tags.some((tag) => newSelectedTags.indexOf(tag) !== -1);
    });
  }
  else {
    newRestaurants = restaurantData.restaurants.sort((a, b) => a.name.localeCompare(b.name));
    if(buttonText === 'Sort Ascending') newRestaurants = newRestaurants.reverse();
  }

  setSelectedTags(newSelectedTags);
  setRestaurants(newRestaurants);
};




const sortHandler = () => {
  (buttonText === 'Sort Descending') ? setButtonText('Sort Ascending') : setButtonText('Sort Descending');
  let newArr = [...restaurants];
  setRestaurants(newArr.reverse());
};

  const classes = useStyles();

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

      <TagChips
          tags={tags}
          onSelect={onTagSelect}
          onDeselect={onTagDeselect}
      />

      <Restaurants restaurants={restaurants} />
      
    </div>
  );
}

export default App;
