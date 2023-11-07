import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__menu">

          <li className="header__menu-item">
            <Link to="/" className="header__menu-link">Home</Link>
          </li>

          <li className="header__menu-item">
            <Link to="/news" className="header__menu-link">News</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;