import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const test = () =>{
        console.log("TESTEEEEEEEEEEEE")
    }
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <p className="navbar-logo" >FAKE SHOP</p>
            <p className="navbar-link" onClick={test}>Produtos</p>
        </div>
    </nav>
  );
}

export default Navbar;
