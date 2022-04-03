import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  // console.log(pathname.includes('course/'));
  return (
    <header className={pathname.includes('course/') ? 'hidden' : 'block'}>
      <nav className="bg-sky-500 h-16 flex justify-between items-center px-20 sticky top-0">
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
    </header>
  );
};

export default Header;
