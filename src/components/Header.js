import React from 'react'
import '../styles/Header.scss';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

function Header() {

  return (
    <h1 className='header'>
      <div>
        <Link to='/' replace>
          <img className='logo' src={logo} alt='Logo Rick and Morty'></img>
        </Link>
      </div>
    </h1>
  );
}

export default Header;