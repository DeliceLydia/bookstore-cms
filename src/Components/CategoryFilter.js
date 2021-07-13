import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleChange = (e) => {
    handleFilterChange(e.target.value);
  };

  return (
    <div className="container">
      <select className="select-field" id="category" name="category" onChange={handleChange}>
        {categories.map((category, index) => (
          <option value={category} key={String(index)}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
