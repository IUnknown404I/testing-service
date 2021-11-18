import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div className={classes.myNav}>
            <NavLink className={classes.navLink} activeClassName={classes.active} to='/courses'>Курсы</NavLink>
            <NavLink className={classes.navLink} activeClassName={classes.active} to='/test_choose'>Тесты</NavLink>
            <NavLink className={classes.navLink} activeClassName={classes.active} to='/profile'>Профиль</NavLink>
        </div>
    );
};

export default NavBar;