import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";
import juice from './juice.jpg';

const Card = (props) =>  (
  <Link to={`/product/${props.card.id}`} className="card-view">
  <div className={props.card.animation}>
    <div className="front">
      <img src={juice} alt="Avatar" className="card-image" />
      <div className="container">
        <h3>{props.card.title}</h3>
        <h3><span className="price"> ${props.card.price}</span></h3> 
        <p>{props.card.description}</p>
      </div>
    </div>
  </div>
  </Link>
);

export default Card;
