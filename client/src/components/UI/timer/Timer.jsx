import React, {useEffect, useState} from 'react';
import classes from './Timer.module.css'

const Timer = ({time, setTime}) => {

    const timer = setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <div className={classes.timer}>
            <div className={classes.out}>
                <span>Время выполнения теста:</span>
                <span className={classes.time}><strong>{Math.trunc(time/60)} мин. {time%60} с.</strong></span>
            </div>
        </div>
    );
};

export default Timer;