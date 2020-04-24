import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCharactersFromAPI } from '../service/API';
import '../styles/App.scss';
import Header from './Header';
import Form from './Form';
import List from './List';
import CharacterDetail from './CharterDetail'

function App() {
  const [characters, setCharacters] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getCharactersFromAPI().then(characters => {
      setCharacters(characters)
    })
  }, []);

  function onNameChange({ target }) {
    setSearchInput(target.value)
    setCharacters(characters);
  }

  function onSubmit(ev) {
    ev.preventDefault()
  }

  function applyFilters() {
    //Si filters.name.length es true (hay algo escrito) ? se hace el filtro de allcharacter por nombre, si es false (no hay nada escrito) : se muestran todos los characters.
    return searchInput.length ? characters.filter(elem => elem.name.toUpperCase().includes(searchInput.toUpperCase())) : characters;
  }

  function searchUserById(id, array) {
    return array.find(elem => elem.id.toString() === id.toString());
  }

  function newSearch() {
    setSearchInput('');
    setCharacters(characters);
  }

  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path='/' render={
          () =>
            <>
              <Form placeholderSearch='Busca tu personaje' onNameChange={onNameChange} onSubmit={onSubmit} value={searchInput} onReset={newSearch}></Form>
              <List list={applyFilters()} value={searchInput} ></List>
            </>
        }>
        </Route>
        <Route
          path='/CharacterDetail/:id'
          render={routerProps =>
            <CharacterDetail match={routerProps.match} elem={searchUserById(routerProps.match.params.id, characters)}></CharacterDetail>
          }
        ></Route>
      </Switch>
    </>
  );
}

export default App;
