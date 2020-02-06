import restaurantData from './../restaurants.json';

const getTags = () => {
  return restaurantData.restaurants
      .sort((a, b) => a.name.localeCompare(b.name))
      .reduce((accArr, currObj) => {
        currObj.tags.forEach(tag => {
          if(accArr.indexOf(tag) === -1) accArr.push(tag);
        });
        return accArr;
      }, []);
};

const getRestaurantsAscending = () => {
  return restaurantData.restaurants
          .sort((a, b) => a.name.localeCompare(b.name));
};

export default {
  getTags,
  getRestaurantsAscending
};