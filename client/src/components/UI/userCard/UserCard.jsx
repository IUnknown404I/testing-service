import React, {useContext} from 'react';
import classes from './UserCard.module.css'
import reduxStore from "../../../redux/store";
import {AuthContext} from "../../../context";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const UserCard = () => {
    const {setIsAuth} = useContext(AuthContext);
    const dispatch = useDispatch();

    const logout = () => {
        setIsAuth(false);
        dispatch(Actions.clearAnswers());
        dispatch(Actions.insertEmail(''));
        dispatch(Actions.insertLogin(''));
        localStorage.removeItem('token');
    }

    return (
        <div className={classes.userCard}>
            <h2 className={classes.h}>Информация аккаунта</h2>
            <div className={classes.div}>
                <span className={classes.span}><i style={{fontSize: '20px'}}>Логин:</i>  {reduxStore.getState().login}</span>
                <span className={classes.span}><i style={{fontSize: '20px'}}>Почта:</i> {reduxStore.getState().email}</span>
            </div>

            <div className={classes.but_div}>
                <button className={classes.but} onClick={() => logout()}>Выйти</button>
            </div>
        </div>
    );
};

export default UserCard;