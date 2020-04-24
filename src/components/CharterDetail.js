import React from 'react'
import { Link } from "react-router-dom";
import '../styles/CharacterDetail.scss';

function CharterDetail(props) {

  if (props.elem) {
    return (
      <section className='character'>
        <article className='character-detail'>
          <div>
            <h2 >{props.elem.name}</h2>
            <img src={props.elem.image} alt={
              props.elem.name}></img>
          </div>
          <div className='character-detail-content'>
            <p>{props.elem.species}</p>
            <p >{props.elem.status}</p>
            <p>{props.elem.origin.name}</p>
            <p>{'Episodes: ' + props.elem.episode.length}</p>
          </div>
        </article>
        <Link to={'/'} className='character-detail-button'>Volver</Link>
      </section>
    );
  } else {
    return (
      <>
        <h2>No hay datos</h2>
        <Link to={'/'}>Volver</Link>
      </>
    )
  }
}

export default CharterDetail;