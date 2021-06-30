/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Book = (book) => (
  <tr id={book.id}>
    <td>
      { book.id }
    </td>
    <td>
      { book.title }
    </td>
    <td>
      { book.category }
    </td>
  </tr>
);

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
