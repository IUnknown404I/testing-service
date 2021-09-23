import React from 'react';
import classes from './Alert.module.css'

const Alert = (props) => {
    return (
        <div className={classes.pane}>
            <h3>Код ошибки: {props.code}</h3>
            <p>Причина: {props.message}</p>
            <button className={classes.removeButton} onClick={() => props.clear({})}>[x]</button>
        </div>
    );
};

export default Alert;