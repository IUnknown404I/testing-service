import React, {useContext} from 'react';
import classes from  './TestCard.module.css'
import {AuthContext} from "../../../context";
import ModalTestAccept from "../modalTestAccept/ModalTestAccept";

const TestCard = (props) => {
    const {testName, setTestName, setTestId} = useContext(AuthContext);

    const start = (event) => {
        event.preventDefault();

        setTestId(props.id);
        setTestName(props.name);
    }

    return (
        <div>
            <form className={classes.card} name={props.id}>
                <div className={classes.cardDiv}>
                    <span className={classes.cardSpan}><strong>Тема:</strong> <i>{props.name}</i></span>
                </div>
                <div className={classes.cardDiv}>
                    <button className={classes.buttons} onClick={(event => {start(event)})}>Выбрать</button>
                </div>
            </form>

            {testName &&
            <ModalTestAccept/>
            }
        </div>
    );
};

export default TestCard;