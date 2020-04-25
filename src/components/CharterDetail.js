import React from 'react'
import { Link } from "react-router-dom";
import noresults from '../images/noresults.png'
import '../styles/CharacterDetail.scss';

function CharterDetail(props) {

  if (props.elem) {
    return (
      <main className='character'>
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
            <p>{'Episodios: ' + props.elem.episode.length}</p>
          </div>
        </article>
        <Link to={'/'} className='character-detail-button'>Volver</Link>
      </main>
    );
  } else {
    return (
      <div className='character-detail-no-content'>
        <h2 className='list-no-content'>No hay datos</h2>
        <Link className='character-detail-button' to={'/'}><img className='no-content-img' src={noresults} alt='Rick and Morty'></img>
          <p>Volver</p></Link>
      </div>
    )
  }
}

export default CharterDetail;