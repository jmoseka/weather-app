import React from 'react';
import './Navbar.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <p className="arrowback"><Link to="*"><IoIosArrowBack /></Link></p>

      <div className="nav-tools">
        <p className="microphone"><FaMicrophone /></p>
        <p><IoIosSettings /></p>
      </div>
    </div>
  );
}

export default Navbar;
