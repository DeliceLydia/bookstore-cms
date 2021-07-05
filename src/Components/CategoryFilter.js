import PropTypes from 'prop-types';

const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="container">
      <select className="category" id="category" name="category">
        {categories.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}

      </select>

    </div>
  );
};

export default CategoryFilter;
