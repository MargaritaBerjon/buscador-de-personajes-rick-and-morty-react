import React from 'react';
import '../styles/List.scss';
import Card from './Card';

function List(props) {

  return (
    < section className="list" >
      {props.list.map((elem, i) => <Card key={i} elem={elem}></Card>
      )}
    </section >
  );
}

export default List;
