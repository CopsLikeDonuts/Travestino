import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
            
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
            
            }
            
        </StoreContext.Consumer>
        
    )
}

export default DialogsContainer;