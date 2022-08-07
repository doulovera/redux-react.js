import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';

import { getPokemonsWithDetails, setPokemons } from './actions';

import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonDetails } from './services/getPokemon';

const LOGO = "https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getPokemon();
      dispatch(getPokemonsWithDetails(results));
    };
    return () => fetchData();
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

export default App;
