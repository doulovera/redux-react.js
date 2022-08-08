import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../services/getPokemon";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonDetails = await Promise.all(pokemons.map((pokemon) => getPokemonDetails(pokemon.url)));

  dispatch(setPokemons(pokemonDetails));  
}