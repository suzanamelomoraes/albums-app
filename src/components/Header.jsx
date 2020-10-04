import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1>Albums' App</h1>
      <p>
        <Link className='home' to={'/'}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default Header;
