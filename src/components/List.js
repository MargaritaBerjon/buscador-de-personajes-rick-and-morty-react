import React from 'react';
import '../styles/App.css';

function List(props) {
  console.log(props.list);

  return (
    < section className="List" >
      {props.list.map((elem, i) => <article ><img src={elem.image} alt={
        elem.name}></img>
        <h2 >{elem.name}</h2>
        <div className="results-img">
          <div className="results-content">
            <p>{elem.species}</p>
            <p>{elem.origin.name}</p>
          </div>
        </div></article>)}

    </section >
  );
}

export default List;
