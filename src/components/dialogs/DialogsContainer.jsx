import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

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
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
            
            }
            
        </StoreContext.Consumer>
        
    )
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = () => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;