const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const getCharactersFromAPI = () => fetch(ENDPOINT)
  .then(response => response.json())
  .then(characters => characters.results)

export { getCharactersFromAPI };