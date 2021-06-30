import React from 'react';
import connect from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = () => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
  </table>
);

export default BooksList;
