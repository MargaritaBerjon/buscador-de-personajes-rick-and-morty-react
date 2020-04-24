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
  const [genders, setGenders] = useState('')

  useEffect(() => {
    getCharactersFromAPI().then(characters => {
      setCharacters(characters)
    })
  }, []);

  function onNameChange({ target }) {
    setSearchInput(target.value)
    setCharacters(characters);
  }

  function onGenderChange({ target }) {
    setGenders(target.value);
    setCharacters(characters);
  }


  //Intento de refactoring de los métodos onchange
  // function onChange({ target }) {
  //   const kind = target.value;
  //   console.log('soy search ' + setSearchInput(kind));
  //   console.log('soy genders ' + setGenders(kind));
  //   setSearchInput(kind);
  //   setGenders(kind);
  //   setCharacters(characters);
  // }

  function onSubmit(ev) {
    ev.preventDefault()
  }

  function applyFilters() {
    //Si filters.name.length es true (hay algo escrito) ? se hace el filtro de allcharacter por nombre, si es false (no hay nada escrito) : se muestran todos los characters.
    let filteredCharacters = searchInput ? characters.filter(elem => elem.name.toUpperCase().includes(searchInput.toUpperCase())) : characters;
    return genders.length ? filteredCharacters.filter(elem => elem.gender === genders) : filteredCharacters;
  }

  function searchCharacterById(id, array) {
    return array.find(elem => elem.id.toString() === id.toString());
  }

  function newSearch() {
    setSearchInput('');
    setGenders('')
    setCharacters(characters);
  }

  function getGenders() {
    //Creo un SET (Como un array sin repeticiones)
    const genders = new Set([]);
    characters.map(elem =>
      genders.add(elem.gender)
    );
    //Transforma un set en Array
    return Array.from(genders);
  }

  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path='/' render={
          () =>
            <>
              <Form placeholderSearch='Busca tu personaje' onNameChange={onNameChange} onSubmit={onSubmit} value={searchInput} onReset={newSearch} list={getGenders()} name={'gender'} onGenderChange={onGenderChange}></Form>
              <List list={applyFilters()} value={searchInput} ></List>
            </>
        }>
        </Route>
        <Route
          path='/CharacterDetail/:id'
          render={routerProps =>
            <CharacterDetail match={routerProps.match} elem={searchCharacterById(routerProps.match.params.id, characters)}></CharacterDetail>
          }
        ></Route>
      </Switch>
    </>
  );
}

export default App;
