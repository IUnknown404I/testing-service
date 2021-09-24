import React from 'react';
import classes from './UserCard.module.css'
import reduxStore from "../../../redux/store";

const UserCard = () => {
    return (
        <div className={classes.userCard}>
            <h2 className={classes.h}>Информация аккаунта</h2>
            <div className={classes.div}>
                <span className={classes.span}><i style={{fontSize: '20px'}}>Логин:</i>  {reduxStore.getState().login}</span>
                <span className={classes.span}><i style={{fontSize: '20px'}}>Почта:</i> {reduxStore.getState().email}</span>
            </div>
        </div>
    );
};

export default UserCard;