import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/state';

const Dialogs = (props) => {

    let state = props.state.getState().dialogsPage;
    let dialogsElements = state.state.dialogs.map (d => {
        return <DialogItem name={d.name} id={d.id}/>
    });
    
    let messagesElements = state.state.messages.map(m => {
        return <Message message={m.text}/>
    });
    let newMeesageBody = state.state.newMeesageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (
        <div className={s.dialogs}>
            <div classname={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMeesageBody} 
                                  placeholder='Enter your message'
                                  onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;