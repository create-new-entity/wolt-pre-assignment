import { createStore, combineReducers } from 'redux';

import buttonTextReducer from './reducers/buttonTextReducer';
import restaurantsReducer from './reducers/restaurantsReducer';
import selectedTagsReducer from './reducers/selectedTagsReducer';

const reducer = combineReducers({
  restaurants: restaurantsReducer,
  selectedTags: selectedTagsReducer,
  buttonText: buttonTextReducer
});

const store = createStore(reducer);

export default store;

