import React, { useState, useEffect } from 'react';
import { getCharactersFromAPI } from '../service/API';
import '../styles/App.scss';
import Header from './Header';
import Form from './Form';
import List from './List'


function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersFromAPI().then(characters => {
      setCharacters(characters)
    })
  }, []);
  console.log(characters);

  return (
    <>
      <Header></Header>
      <Form></Form>
      <List list={characters}></List>
    </>
  );
}

export default App;
