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

  function onNameChange({ target }) {
    console.log(target);
    const userSearch = target.value;
    setCharacters(applyFilters())
  }

  function applyFilters() {
    //Si filters.name.length es true (hay algo escrito) ? se hace el filtro de allcharacter por nombre, si es false (no hay nada escrito) : se muestran todos los characters. 
    filters.name.length ? characters.filter(elem => elem.name.toUpperCase().includes(filters.name.toUpperCase())) : characters;

    return (
      <>
        <Header></Header>
        <Form placeholderSearch='Busca tu personaje' onNameChange={onNameChange}></Form>
        <List list={characters}></List>
      </>
    );
  }

  export default App;
