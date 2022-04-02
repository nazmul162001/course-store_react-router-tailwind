import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="bg-sky-500 h-16 flex justify-between items-center px-20">
      <div className="logo">
        <h2 className="font-mono font-bold text-3xl">
          {' '}
          <Link to="/">Logo</Link>{' '}
        </h2>
      </div>
      <div className="nav-menu">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/course"
        >
          Course
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/feedback"
        >
          Feedback
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
