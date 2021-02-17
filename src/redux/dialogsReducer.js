const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, text: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;