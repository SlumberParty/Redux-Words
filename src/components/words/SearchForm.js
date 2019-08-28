import React from 'react';
import PropTypes from 'prop-types';


function SearchForm({ text, handleChange }) {
  return (  
    <>
    <input name="text" value={text} type='text' onChange={handleChange} />
    <p>{text}</p>
    </>
  );
}

SearchForm.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
