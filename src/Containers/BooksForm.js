import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../Actions/index';

const BooksForm = ({ createBook }) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleTitleChange = (e) => { setTitle(e.target.value); };
  const handleCategoryChange = (e) => { setCategory(e.target.value); };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({
      id: Math.floor(Math.random() * 10000),
      title,
      category,
    });
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="add-new-book normal">ADD NEW BOOK</h2>
      <input type="text" id="title" name="title" className="input-form border height" value={title} onChange={handleTitleChange} />
      <select name="category" id="category" className="select-categorie border height" value={category} onChange={handleCategoryChange}>
        {bookCategories.map((category, index) => (
          <option value={category} key={String(index)}>{category}</option>
        ))}
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
