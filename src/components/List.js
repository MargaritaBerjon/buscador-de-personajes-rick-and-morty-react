import React from 'react';
import '../styles/App.scss';
import Card from './Card';

function List(props) {
  console.log(props.list);

  return (
    < section className="List" >
      {props.list.map((elem, i) => <Card key={i} elem={elem}></Card>
      )}
    </section >
  );
}

export default List;
