import React from 'react'
import '../styles/App.scss';
import logo from '../images/logo.png'

function Header() {

  return (
    <h1>
      <img src={logo} alt='Logo Rick and Morty'></img>
    </h1>
  );
}

export default Header;