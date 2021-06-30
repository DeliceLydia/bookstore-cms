/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../Components/Book';
import { removeBook } from '../Actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books && books.length
            ? books.map((val) => (
              <Book handleRemoveBook={handleRemoveBook} key={val.id} book={val} />
            ))
            : (
              <tr>
                <td>No books!</td>
              </tr>
            )
      }

      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
