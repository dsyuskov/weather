import React from 'react';

const Search = ({ onChange, value }) => (
  <input 
    type="text"
    placeholder="Enter city name"
    onChange={onChange}
    value={value}
  />
)

export default Search;
