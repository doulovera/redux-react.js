import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { pokemonsReducer } from './reducers/pokemons'
import { legacy_createStore as createStore } from 'redux'

import App from './App'
import './index.css'

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
