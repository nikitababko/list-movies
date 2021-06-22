import React from 'react';

import SearchIcon from 'components/Header/assets/SearchIcon';

import './index.scss';

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Enter film title..." />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
