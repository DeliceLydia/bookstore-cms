import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';

const Book = ({ book, handleRemoveBook }) => (
  <main className="book-panel flex">
    <div className="div-container">
      <div className="category">{book.category}</div>
      <div className="title normal">{book.title}</div>
      <div className="author default normal font-family">Michelle</div>
      <div className="down-section">
        <button type="button" className="comment default normal font-family">Comments</button>
        <button onClick={() => handleRemoveBook(book)} type="submit" className="remove default normal font-family">Remove</button>
        <button type="button" className="edit default normal font-family">Edit</button>
      </div>
    </div>
    <div className="book-update">
      <div className="progress-div">
        <CircularProgressbar value={45} text="" />
        <div className="">
          <p className="percentage">64%</p>
          <p className="complete">Completed</p>
        </div>
      </div>
    </div>
    <div className="line-2">
      <div>
        <p className="current-chapter default-current">CURRENT CHAPTER</p>
        <p className="current-lesson default-current">CHAPTER 17</p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  </main>
);

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
