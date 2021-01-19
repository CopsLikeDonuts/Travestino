import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map (d => {
        return <DialogItem name={d.name} id={d.id}/>
    });
    
    let messagesElements = props.state.messages.map(m => {
        return <Message message={m.text}/>
    });

    return (
        <div className={s.dialogs}>
            <div classname={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;