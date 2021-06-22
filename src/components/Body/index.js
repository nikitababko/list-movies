import React from 'react';

import { Search, ListMovies } from 'components';

import './index.scss';

const Body = () => {
  return (
    <div className="body">
      <Search />
      <ListMovies />
    </div>
  );
};

export default Body;
