import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [{id: 1, post: 'Hi, how are you?', likes: 15}, 
               {id: 2, post: "It's my first post", likes: 15},
               {id: 3, post: "Belissimo", likes: 10},
               {id: 4, post: "Good to start something new", likes: 25}]

let dialogs = [{id: 1, name: 'Sanek'}, 
                  {id: 2, name: 'Alyona'}, 
                  {id: 3, name: 'Vovchik'}, 
                  {id: 4, name: 'papa'},
                  {id: 5, name: 'Vlad'},
                  {id: 6, name: 'Vasya'},
                  {id: 7, name: 'Dima'}]
  
let messages = [{id: 0, text: 'Hello'}, 
                {id: 1, text: 'How is your programming'}, 
                {id: 2, text: 'Yo'}, 
                {id: 3, text: 'Yo'}, 
                {id: 4, text: 'Yo'}]
ReactDOM.render(
    <App posts={posts} messages={messages} dialogs={dialogs}/>,
    document.getElementById('root')
  );