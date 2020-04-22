import React from 'react'
import '../styles/App.scss';

function Card(props) {

  return (
    <article ><img src={props.elem.image} alt={
      props.elem.name}></img>
      <h2 >{props.elem.name}</h2>
      <div className="results-img">
        <div className="results-content">
          <p>{props.elem.species}</p>
          <p>{props.elem.origin.name}</p>
        </div>
      </div></article>
  );
}

export default Card;