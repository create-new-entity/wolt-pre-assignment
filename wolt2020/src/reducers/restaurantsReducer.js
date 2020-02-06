import restaurantData from './../restaurants.json';

export const initializeRestaurantsAction = () => {
  let restaurants = restaurantData.restaurants.sort((a, b) => a.name.localeCompare(b.name));
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


const restaurantsReducer = (state = [], action) => {
  switch(action.type) {
    case 'INITIALIZE':
    case 'SET_RESTAURANTS':
      return action.data.restaurants;
    default:
      return state;
  }
};

export default restaurantsReducer;