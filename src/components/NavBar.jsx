import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './Navbar.css';
import tStore from '../assets/tStore.jpg'

function Navbar() {
  const navigate = useNavigate()
  const backHomeScreen = () =>{
      navigate('/')
    }
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <img className="navbar-logo" src={tStore} ></img>
            <p className="navbar-link" onClick={backHomeScreen}>PRODUTOS</p>
        </div>
    </nav>
  );
}

export default Navbar;
