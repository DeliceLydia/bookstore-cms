import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Components/Book';
import { removeBook, changeFilter } from '../Actions/index';
import CategoryFilter from '../Components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="container-filter">
        {(filter === 'All' ? books : books.filter((book) => book.category === filter))
          .map((book) => (
            <Book book={book} key={book.id} removeBook={handleRemoveBook} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
