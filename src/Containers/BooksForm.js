import React from 'react';

const BooksForm = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];
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
