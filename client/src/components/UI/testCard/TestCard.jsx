import React from 'react';
import classes from  './TestCard.module.css'

const TestCard = (props) => {
    const start = (event) => {
        event.preventDefault();

        console.log(event.target.parentNode.parentNode.name)
    }

    return (
        <form className={classes.card} name={props.id}>
            <div className={classes.cardDiv}>
                <span className={classes.cardSpan}><strong>Тема:</strong> <i>{props.name}</i></span>
            </div>
            <div className={classes.cardDiv}>
                <button className={classes.buttons} onClick={(event => {start(event)})}>Начать</button>
            </div>
        </form>
    );
};

export default TestCard;