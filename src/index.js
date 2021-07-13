import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import reducer from './Reducers';
import './index.css';

const state = {
  books: [
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Americanah',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Javascript',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'My name is life',
      category: 'Biography',
    },
  ],
  filter: 'All',
};

const store = createStore(reducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
