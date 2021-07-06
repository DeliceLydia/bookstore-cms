import { combineReducers } from 'redux';
import bookReducer from './books';
import filter from './filter';

export default combineReducers({
  books: bookReducer,
  filter,
});
