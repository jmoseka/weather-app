import React from 'react';
import './Navbar.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';

function Navbar() {
  return (
    <div className="navbar">
      <p className="arrowback"><IoIosArrowBack /></p>
      <div className="search-container">
        <input className="search-input" placeholder="Search city" />
      </div>

      <div className="nav-tools">
        <p className="microphone"><FaMicrophone /></p>
        <p><IoIosSettings /></p>
      </div>
    </div>
  );
}

export default Navbar;
