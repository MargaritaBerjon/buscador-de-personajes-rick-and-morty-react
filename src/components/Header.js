import React from 'react'
import '../styles/Header.scss';
import logo from '../images/logo.png'

function Header() {

  return (
    <h1 className='header'>
      <div>
        <img className='logo' src={logo} alt='Logo Rick and Morty'></img>
      </div>
    </h1>
  );
}

export default Header;