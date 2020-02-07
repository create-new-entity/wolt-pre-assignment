import services from './../services/restaurants';

export const initializeRestaurantsAction = () => {
  let restaurants = services.getRestaurantsAscending();
  return {
    type: 'INITIALIZE',
    data: {
      restaurants
    }
  };
};

export const setRestaurantsAction = (restaurants) => {
  return {
    type: 'SET_RESTAURANTS',
    data: {
      restaurants
    }
  }
};

export const updateRestaurantsAfterTagInteraction = (selectedTags, sortOrder) => {
  let restaurants = services.getRestaurantsAscending();
  if(selectedTags.length){
    restaurants = restaurants.filter((restaurant) => {
      return restaurant.tags.some((tag) => selectedTags.indexOf(tag) !== -1);;
    });
  }
  else {
    restaurants = services.getRestaurantsAscending();
    if(sortOrder === 'descending') restaurants = restaurants.reverse();
  }

  return {
    type: 'UPDATE_RESTAURANTS',
    data: restaurants
  };
};



const restaurantsReducer = (state = [], action) => {
  switch(action.type) {
    case 'INITIALIZE':
    case 'SET_RESTAURANTS':
    case 'CHANGE_ORDER':
      return action.data.restaurants;
    case 'UPDATE_RESTAURANTS':
      return action.data;
    default:
      return state;
  }
};

export default restaurantsReducer;