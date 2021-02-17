import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, post: 'Hi, how are you?', likes: 15}, 
                {id: 2, post: "It's my first post", likes: 15},
                {id: 3, post: "Belissimo", likes: 10},
                {id: 4, post: "Good to start something new", likes: 25}],
            newPostText: ''
        },
        
        dialogsPage: {
            messages: [{id: 0, text: 'Hello'}, 
                   {id: 1, text: 'How is your programming'}, 
                   {id: 2, text: 'Yo'}, 
                   {id: 3, text: 'Yo'}, 
                   {id: 4, text: 'Yo'}],
    
            dialogs: [{id: 1, name: 'Sanek'}, 
                    {id: 2, name: 'Alyona'}, 
                    {id: 3, name: 'Vovchik'}, 
                    {id: 4, name: 'papa'},
                    {id: 5, name: 'Vlad'},
                    {id: 6, name: 'Vasya'},
                    {id: 7, name: 'Dima'}],
            newMessageBody: ''
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state has changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){ 

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;