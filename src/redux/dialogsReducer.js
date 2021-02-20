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
    let stateCopy;
    

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, text: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;