import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider value={store}>
        <App/>
      </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
}
rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

