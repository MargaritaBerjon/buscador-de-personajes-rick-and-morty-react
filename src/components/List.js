import React from 'react';
import '../styles/List.scss';
import Card from './Card';

function List(props) {

  return (
    < section className="list" >
      {props.list.length ? props.list.map((elem, i) => <Card key={i} elem={elem}></Card>) : <div className='list-no-results'>
        <h2 className='list-no-content'>No hay resultados</h2>
      </div>}
    </section >
  );
}

export default List;
