import { useState } from 'react';
import { connect } from 'react-redux';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBook(book);
    clearState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" onChange={handleChange} />
      <select name="category" id="category" onChange={handleChange}>
        {bookCategories.map((val) => <option key={val} value={val}>{val}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
