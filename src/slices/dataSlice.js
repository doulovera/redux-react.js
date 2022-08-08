import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getPokemon, getPokemonDetails } from "../services/getPokemon";

const initialState = {
  pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const { results } = await getPokemon();
    const pokemonDetails = await Promise.all(results.map((pokemon) => getPokemonDetails(pokemon.url)));
    dispatch(setPokemons(pokemonDetails));
    dispatch(setLoading(false));
  },
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => pokemon.id === action.payload.pokemonId);

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
