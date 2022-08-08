import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';

import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

const LOGO = "https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10} style={{ marginBottom: '3rem' }}>
        <img src={LOGO} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col offset={12} style={{ marginTop: '3rem' }}>
        <Spin size='large' spinning={loading} />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App;
