import React from 'react'
import { Link } from "react-router-dom";
import '../styles/CharacterDetail.scss';

function CharterDetail(props) {

  if (props.elem) {
    return (
      <article className='character-detail'>
        <div className='character-detail-img'>
          <h2 >{props.elem.name}</h2>
          <img src={props.elem.image} alt={
            props.elem.name}></img>
        </div>
        <div className='character-detail-content'>
          <p>{props.elem.species}</p>
          <p >{props.elem.status}</p>
          <p>{props.elem.origin.name}</p>
          <p>{'Episodes: ' + props.elem.episode.length}</p>
          <Link to={'/'} className='.character-detail-button'>Volver</Link>
        </div>
      </article>
    );
  } else {
    return (
      <>
        <h1>No hay datos</h1>
        <Link to={'/'}>Volver</Link>
      </>
    )
  }
}


export default CharterDetail;