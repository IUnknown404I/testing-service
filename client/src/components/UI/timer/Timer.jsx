import React, {useEffect, useState} from 'react';
import classes from './Timer.module.css'

const Timer = () => {
    const [sec, setSecs] = useState(0);
    const [min, setMins] = useState(0);

    const timer = setTimeout(() => {
        if(sec===59) {
            setSecs(0);
            setMins(min + 1);
        } else {
            setSecs(sec + 1);
        }
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
                <span className={classes.time}><strong>{min} мин. {sec} с.</strong></span>
            </div>
        </div>
    );
};

export default Timer;