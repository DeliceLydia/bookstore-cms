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
      <h2 className="add-new-book normal">ADD NEW BOOK</h2>
      <input type="text" id="title" name="title" className="input-form border height" value={book.title} onChange={handleChange} />
      <select name="category" id="category" className="select-categorie border height" onChange={handleChange}>
        {bookCategories.map((val) => <option key={val} value={val}>{val}</option>)}
      </select>
      <button type="submit" className="update-progress height font-family">ADD BOOK</button>
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
