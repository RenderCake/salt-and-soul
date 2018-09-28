import React from 'react';
import { Link } from 'react-static';

const Nav = () => (
  <nav>
    <Link exact to="/">
      Home
    </Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
);

export default Nav;
