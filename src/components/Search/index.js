import React from 'react';

import SearchIcon from 'components/Header/assets/SearchIcon';

import './index.scss';

const Search = () => {
  return (
    <div className="search">
      <div className="search__inner">
        <input type="text" placeholder="Enter film title..." />
        <button>
          <SearchIcon />
        </button>
      </div>

      <div className="tag-movie">
        <p>Титаник</p>
      </div>
    </div>
  );
};

export default Search;
