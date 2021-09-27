import React, {useContext} from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const NavBar = () => {
    const {testName, testId, setIsAuth} = useContext(AuthContext);
    const dispatch = useDispatch();

    const logout = () => {
        if(testName || testId) {
            if(!window.confirm('Вы не ответили на все вопросы, закончить тест? Все неотвеченные вопросы будут помечены как нерешённые.')) {
                return;
            }
        }

        setIsAuth(false);
        dispatch(Actions.clearAnswers());
        dispatch(Actions.insertEmail(''));
        dispatch(Actions.insertLogin(''));
        localStorage.removeItem('token');
    }

    return (
        <div className={classes.myNav}>
            <MyButton onClick={() => logout()}>Выйти</MyButton>
            <div>
                <NavLink className={classes.navLink} to='/test_choose'>Тесты</NavLink>
                <NavLink className={classes.navLink} to='/info'>Информация</NavLink>
                <NavLink className={classes.navLink} to='/profile'>Профиль</NavLink>
            </div>
        </div>
    );
};

export default NavBar;