import React from 'react';
import {Redirect} from 'react-router-dom';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    console.log(props);
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map (d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    });
    
    let messagesElements = state.messages.map(m => {
        return <Message message={m.text} key={m.id}/>
    });
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>



    return (
        <div className={s.dialogs}>
            <div classname={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} 
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