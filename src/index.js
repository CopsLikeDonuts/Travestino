import state from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {subscribe} from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} 
         addPost={addPost}
         updateNewPostText={updateNewPostText}/>,
    document.getElementById('root')
  );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

