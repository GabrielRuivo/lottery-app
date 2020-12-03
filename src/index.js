import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'; 
import {createStore} from 'redux';

import reducer from './store/reducers/bets';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer)
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <App />,
    </PersistGate>
  </Provider>, 
document.getElementById('root'));
