import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArticles } from '../../actions/articleActions';
import './SearchBar.scss';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchArticles(query));
  };

  return (
    <div className="search">
      <h2 className="search__title">Search</h2>
      <div className="search__field">
        <input
          type="text"
          placeholder="Search for articles..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
