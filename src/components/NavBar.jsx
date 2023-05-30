import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import tStore from '../assets/tStore.jpg'

function Navbar() {
    const test = () =>{
        console.log("TESTEEEEEEEEEEEE")
    }
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <img className="navbar-logo" src={tStore} ></img>
            <p className="navbar-link" onClick={test}>Produtos</p>
        </div>
    </nav>
  );
}

export default Navbar;
