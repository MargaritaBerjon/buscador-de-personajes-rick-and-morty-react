import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Card.scss';

function Card(props) {
  const { image, name, species, id, status } = props.elem;
  const statusConversion = {
    Alive: '✅',
    Dead: '❌',
    unknown: '❓'
  }

  const speciesConversion = {
    Alien: '👽',
    Human: '😃'
  }

  return (
    <article className='card'><img src={image} alt={
      name}></img>
      <h2 >{name}</h2>
      <div className='card-img'>
        <div className='card-content'>
          <p>{species + ' ' + speciesConversion[species]} </p>
          <p >{'Estado: ' + statusConversion[status]}</p>
          <Link className='card-button' to={'/CharacterDetail/' + id}>Más info</Link>
        </div>
      </div></article>
  );
}

export default Card;