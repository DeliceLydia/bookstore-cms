import React from 'react';
import BooksList from '../Containers/BookList';
import BooksForm from '../Containers/BooksForm';
import Navbar from '../Containers/Navbar';

const App = () => (
  <div>
    <Navbar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
