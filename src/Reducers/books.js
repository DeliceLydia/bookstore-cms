import { CREATE_BOOK, REMOVE_BOOK } from '../Actions/ActionTypes';

const bookReducer = (initialState = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...initialState, action.book];
    case REMOVE_BOOK:
      return initialState.filter((book) => book !== action.book);
    default:
      return initialState;
  }
};

export default bookReducer;
