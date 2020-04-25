import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
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
    <article className='card'>
      <Link to={'/CharacterDetail/' + id}>
        <img src={image} alt={name}></img>
        <h2 >{name}</h2>
        <div className='card-img'>
          <div className='card-content'>
            <p>{species + ' ' + speciesConversion[species]} </p>
            <p >{'Estado: ' + statusConversion[status]}</p>
            <p className='card-button'> Más info</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

Card.prototypes = {
  image: PropTypes.img,
  name: PropTypes.string,
  species: PropTypes.string,
  id: PropTypes.string,
  status: PropTypes.string
}

export default Card;