import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from './assets/SearchIcon';
import FavIcon from './assets/FavIcon';
import TrendingIcon from './assets/TrendingIcon';
import InformationIcon from './assets/InformationIcon';

import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav__link" to="/">
          <SearchIcon />
        </Link>

        <Link className="nav__link" to="/favorites">
          <FavIcon />
        </Link>

        <Link className="nav__link" to="/trendings">
          <TrendingIcon />
        </Link>

        <Link className="nav__link" to="/">
          <InformationIcon />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
