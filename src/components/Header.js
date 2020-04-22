import React from 'react'
import '../styles/Header.scss';
import logo from '../images/logo.png'

function Header() {

  return (
    <h1 className='header'>
      <img src={logo} alt='Logo Rick and Morty'></img>
    </h1>
  );
}

export default Header;