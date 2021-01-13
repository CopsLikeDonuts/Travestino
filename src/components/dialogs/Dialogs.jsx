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
    return (
        <div className={s.dialogs}>
            <div classname={s.dialogsItems}>
                <DialogItem name='Sanek' id='1'/>
                <DialogItem name='Alyona' id='2'/>
                <DialogItem name='Vovchik' id='3'/>
                <DialogItem name='papa' id='4'/>
                <DialogItem name='Vlad' id='5'/>
                <DialogItem name='Vasya' id='6'/>
                <DialogItem name='Dima' id='7'/>
            </div>
            <div className={s.messages}>
                 
                <Message message='Hello'/>
                <Message message='How is your programming'/>
                <Message message='yo'/>
                <Message message='yo'/>
                <Message message='yo'/>
            </div>
        </div>
    )
}

export default Dialogs;