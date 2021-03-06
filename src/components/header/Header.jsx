import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='logo.png' alt='logo'></img>
            <div className={classes.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    )
}

export default Header;