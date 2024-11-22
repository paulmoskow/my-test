import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/cat.svg';

function Header() {
  return (
    <header className="App-header">
      <NavLink to='/my-test/'>
        <img src={logo} className='App-logo' alt='logo'/>
      </NavLink>
      <h1>
        cats on facts
      </h1>
      <NavLink to='/my-test/products' className='App-link'>your cats</NavLink>
      <NavLink to='/my-test/create-product' className='App-link'>make fact</NavLink>
    </header>
  );
}

export default Header;