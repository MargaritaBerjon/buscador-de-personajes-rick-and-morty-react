import React from 'react';
import '../styles/List.scss';
import noresults from '../images/noresults.png'
import Card from './Card';


function List(props) {
  //Ordena el array por nombre alfabéticamente
  props.list.sort((elem, otherelem) => elem.name.localeCompare(otherelem.name));
  return (
    < section className="list" >
      {props.list.length ? props.list.map((elem, i) => <Card key={i} elem={elem}></Card>) : <div className='list-no-results'>
        <h2 className='list-no-content'>No hay ningún personaje que coincida con la palabra "{props.value}"</h2>
        <img src={noresults} alt='Rick and Morty'></img>
      </div>}
    </section >
  );
}

export default List;
