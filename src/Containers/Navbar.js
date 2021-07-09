import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => (
  <header className="panel-bg">
    <nav className="navbar flex">
      <ul className="left-nav flex">
        <li className="nav-item"><h1 className="Bookstore-CMS normal">Bookstore CMS</h1></li>
        <li className="nav-item BOOKS font normal black">Books</li>
        <li className="nav-item CATEGORIES font normal black">Categories</li>
      </ul>
      <ul className="right-nav">
        <li><FontAwesomeIcon icon={faUser} /></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
