import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';

import { setPokemons as setPokemonsAction } from './actions';

import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { getPokemon } from './services/getPokemon';

const LOGO = "https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"

function App({ pokemons, setPokemons }) {
  console.log(pokemons)

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getPokemon();
      setPokemons(results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10} style={{ marginBottom: '3rem' }}>
        <img src={LOGO} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
