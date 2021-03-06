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
  const [episodes, setEpisodes] = useState('')

  useEffect(() => {
    getCharactersFromAPI().then(characters => {
      setCharacters(characters)
    })
  }, []);

  function onNameChange({ target }) {
    setSearchInput(target.value)
  }

  function onGenderChange({ target }) {
    setGenders(target.value);

  }

  function onNumberChange({ target }) {
    setEpisodes(target.value);

  }

  function onSubmit(ev) {
    ev.preventDefault()
  }

  function applyFilters() {
    let filteredCharacters = searchInput ? characters.filter(elem => elem.name.toUpperCase().includes(searchInput.toUpperCase())) : characters;
    let filterGender = genders.length ? filteredCharacters.filter(elem => elem.gender === genders) : filteredCharacters;
    let filterEpisodes = characters.filter(elem => elem.episode.length === parseInt(episodes));

    if (searchInput) {
      return filterGender;

    } if (genders.length) {
      return filterGender;
    }
    if (episodes) {
      return filterEpisodes;

    } else {
      return characters;
    }
  }

  function searchCharacterById(id, array) {
    return array.find(elem => elem.id.toString() === id.toString());
  }

  function newSearch() {
    setSearchInput('');
    setGenders('');
    setEpisodes('');

  }

  function getGenders() {
    //Creo un SET (Como un array sin repeticiones)
    const genders = new Set([]);
    characters.map(item =>
      genders.add(item.gender)
    );
    //Transforma un set en Array
    return Array.from(genders).sort((gender, othergender) => gender.localeCompare(othergender));
  }

  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path='/' render={
          () =>
            <>
              <Form placeholderSearch='Busca tu personaje' placeholderEpisodes='Busca por nº de episodios' onNameChange={onNameChange} onSubmit={onSubmit} value={searchInput} onReset={newSearch} items={getGenders()} name={'gender'} onGenderChange={onGenderChange} onNumberChange={onNumberChange} valueEpisodes={episodes}></Form>
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
