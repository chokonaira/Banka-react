import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/scss/Header.scss';


const Header = () => (
  <header className="header">
    <NavLink to="/" activeClassName="is-active" exact className="navlink"> BANKA </NavLink>
    <div className="navbar">
      <NavLink to="/signup" activeClassName="is-active" className="navlinks">Signup</NavLink>
      <NavLink to="/login" activeClassName="is-active" className="navlinks">Login</NavLink>
      <NavLink to="/about" activeClassName="is-active" className="navlinks">About</NavLink>
    </div>
  </header>
);

export default Header;
