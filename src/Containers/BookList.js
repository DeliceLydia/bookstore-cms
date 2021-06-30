/* eslint-disable react/destructuring-assignment */
import React from 'react';
import connect from 'react-redux';
import Book from '../Components/Book';

const BooksList = (books) => (
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
              <Book key={val.id} book={val} />
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

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

export default connect(mapStateToProps, null)(BooksList);
