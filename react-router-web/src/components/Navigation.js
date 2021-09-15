import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
    <Link to="/" onClick={() => props.closeNav()} >Home</Link>
    <Link to="/Vitamin" onClick={() => props.closeNav()}>Vitamin juice</Link>
      <a href="">Clothing</a>
      <a href="">Supplements</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Navigation;
