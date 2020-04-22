import React, { useState, useEffect } from 'react';
import { getCharactersFromAPI } from '../service/API';
import '../styles/App.scss';
import Header from './Header';
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
    <div className="App">
      <Header></Header>
      <List list={characters}></List>
    </div>
  );
}

export default App;
