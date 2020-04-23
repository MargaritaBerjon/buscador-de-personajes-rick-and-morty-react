import React from 'react'
import { Link } from "react-router-dom";
import '../styles/CharacterDetail.scss';

function CharterDetail(props) {

  return (
    <article className='character-detail'><img src={props.elem.image} alt={
      props.elem.name}></img>
      <h2 >{props.elem.name}</h2>
      <div className='character-detail-img'>
        <div className='character-detail-content'>
          <p>{props.elem.species}</p>
          <p>{props.elem.origin.name}</p>
          <Link to={'/'}>Volver</Link>
        </div>
      </div></article>
  );
}

export default CharterDetail;