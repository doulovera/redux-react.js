export async function getPokemon () {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset=0');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonDetails (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}