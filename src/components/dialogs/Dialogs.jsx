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

    let messageData = ['Hello', 'How is your programming', 'Yo', 'Yo', 'Yo']

    return (
        <div className={s.dialogs}>
            <div classname={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
                <DialogItem name={dialogData[6].name} id={dialogData[6].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0]}/>
                <Message message={messageData[1]}/>
                <Message message={messageData[2]}/>
                <Message message={messageData[3]}/>
                <Message message={messageData[4]}/>
            </div>
        </div>
    )
}

export default Dialogs;