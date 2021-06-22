import React from 'react';

import SearchIcon from './assets/SearchIcon';
import FavIcon from './assets/FavIcon';
import TrendingIcon from './assets/TrendingIcon';
import InformationIcon from './assets/InformationIcon';

import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="nav__link" href="">
          <SearchIcon />
        </a>

        <a className="nav__link" href="">
          <FavIcon />
        </a>

        <a className="nav__link" href="">
          <TrendingIcon />
        </a>

        <a className="nav__link" href="">
          <InformationIcon />
        </a>
      </nav>
    </header>
  );
};

export default Header;
