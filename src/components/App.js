import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import List from './List'
import { getCharactersFromAPI } from '../service/API';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersFromAPI().then(characters => {
      setCharacters(characters)
    })
  }, []);
  console.log(characters);

  return (
    <div className="App">
      <h1>Hola</h1>
      <List list={characters}></List>
    </div>
  );
}

export default App;
