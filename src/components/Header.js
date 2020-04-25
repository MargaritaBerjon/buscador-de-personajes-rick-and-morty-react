import React from 'react'
import '../styles/Header.scss';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

function Header() {

  return (
    <header className='header'>
      <Link to='/' replace>
        <img className='logo' src={logo} alt='Logo Rick and Morty'></img>
      </Link>
    </header>
  );
}

export default Header;