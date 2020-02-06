import { createStore, combineReducers } from 'redux';

import sortOrderReducer from './reducers/sortOrderReducer';
import restaurantsReducer from './reducers/restaurantsReducer';
import selectedTagsReducer from './reducers/selectedTagsReducer';

const reducer = combineReducers({
  restaurants: restaurantsReducer,
  selectedTags: selectedTagsReducer,
  sortOrder: sortOrderReducer
});

const store = createStore(reducer);

export default store;

