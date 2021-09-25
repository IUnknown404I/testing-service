import React, {useContext} from 'react';
import classes from './ModalTestAccept.module.css'
import {AuthContext} from "../../../context";
import {useHistory} from 'react-router-dom'

const ModalTestAccept = () => {
    const {testName, setTestName, setTestId} = useContext(AuthContext);
    const history = useHistory();

    const cancel = () => {
        setTestName('');
        setTestId('');
        document.querySelector(`.${classes.modalOpacity}`).remove();
    }
    const approve = () => {
        history.push('/test');

        document.querySelector(`.${classes.modalOpacity}`).remove();
    }

    return (
        <div className={classes.modalOpacity}>
            <div className={classes.modal}>
                <h2>Подтвердить начало прохождение теста <i>{testName}</i></h2>
                <span>Вопросов в тесте: 10, Время прохождения: 10 минут.</span>
                <div className={classes.modalButCont}>
                    <button onClick={() => cancel()}>Отменить</button>
                    <button onClick={() => approve()}>Начать</button>
                </div>
            </div>
        </div>
    );
};

export default ModalTestAccept;