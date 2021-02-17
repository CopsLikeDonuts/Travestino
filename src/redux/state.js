const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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

    dispatch(action){ // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, text: body});
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
  }

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default store;

window.store = store;