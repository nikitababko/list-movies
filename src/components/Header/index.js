import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchIcon from './assets/SearchIcon';
import FavIcon from './assets/FavIcon';

import './index.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <Link
          className={pathname === '/' ? 'nav__link active' : 'nav__link'}
          to="/"
        >
          <SearchIcon />
        </Link>

        <Link
          className={
            pathname === '/favorites' ? 'nav__link active' : 'nav__link'
          }
          to="/favorites"
        >
          <FavIcon />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
