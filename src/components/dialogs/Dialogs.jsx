import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink> 
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogData = [{id: 1, name: 'Sanek'}, 
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
    
    let dialogsElements = dialogData.map (d => {
        return <DialogItem name={d.name} id={d.id}/>
    });
    
    let messagesElements = messages.map(m => {
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