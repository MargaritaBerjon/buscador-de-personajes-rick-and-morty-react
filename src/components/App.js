import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCharactersFromAPI } from '../service/API';
import '../styles/App.scss';
import Header from './Header';
import Form from './Form';
import List from './List';
import CharacterDetail from './CharterDetail'

let allCharacters = [];
let filters = { name: '' };

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersFromAPI().then(characters => {
      allCharacters = characters;
      setCharacters(characters)
    })
  }, []);

  function onNameChange({ target }) {
    filters.name = target.value;
    setCharacters(applyFilters());
  }

  function applyFilters() {
    //Si filters.name.length es true (hay algo escrito) ? se hace el filtro de allcharacter por nombre, si es false (no hay nada escrito) : se muestran todos los characters.
    return filters.name.length ? allCharacters.filter(elem => elem.name.toUpperCase().includes(filters.name.toUpperCase())) : allCharacters;
  }

  function searchUserById(id, array) {
    return array.find(elem => elem.id.toString() === id.toString());
  }

  return (
    <>
      <Switch>
        <Route exact path='/' render={
          () =>
            <>
              <Header></Header>
              <Form placeholderSearch='Busca tu personaje' onNameChange={onNameChange}></Form>
              <List list={characters}></List>
            </>
        }>
        </Route>
        <Route
          path='/CharacterDetail/:id'
          render={routerProps =>
            <CharacterDetail match={routerProps.match} elem={searchUserById(routerProps.match.params.id, allCharacters)}></CharacterDetail>
          }
        ></Route>

      </Switch>
    </>
  );
}

export default App;
