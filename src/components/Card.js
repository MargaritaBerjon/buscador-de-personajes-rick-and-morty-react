import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Card.scss';

function Card(props) {


  return (
    <article className='card'><img src={props.elem.image} alt={
      props.elem.name}></img>
      <h2 >{props.elem.name}</h2>
      <div className='card-img'>
        <div className='card-content'>
          <p>{props.elem.species}</p>
          <p>{props.elem.origin.name}</p>
          <Link to={'/CharacterDetail/' + props.elem.id}>Más info</Link>
        </div>
      </div></article>
  );
}

export default Card;