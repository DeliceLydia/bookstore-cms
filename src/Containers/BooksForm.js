import { useState } from 'react';
import PropTypes from 'prop-types';
import { createBook } from '../Actions/index';

const BooksForm = (props) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];
  const initialState = {
    title: '',
    category: '',
    id: null,
  };
  const [book, setBook] = useState(initialState);

  const handleChange = (event) => {
    event.preventDefault();
    setBook({
      ...book,
      [event.target.name]: event.target.value,
      id: Math.floor(Math.random() * 100),
    });
  };

  const clearState = () => {
    setBook({
      ...initialState,
    });
  };

  return (
    <form>
      <input type="text" id="title" />
      <select name="category" id="category">
        {bookCategories.map((val) => <option key={val} value={val}>{val}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
