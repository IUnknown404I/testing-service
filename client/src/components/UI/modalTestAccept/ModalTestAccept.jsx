import React, {useContext, useEffect, useState} from 'react';
import classes from './ModalTestAccept.module.css'
import {AuthContext} from "../../../context";
import {useHistory} from 'react-router-dom'
import {getQuestions} from "../../../http/questionsAPI";
import {getTest} from "../../../http/testChooseAPI";

const ModalTestAccept = () => {
    const {testName, setTestName, setTestId} = useContext(AuthContext);
    const [questionsCount, setQuestionsCount] = useState(0);
    const history = useHistory();

    const getCount = async () => {
        const {id} = await getTest(testName);
        setQuestionsCount(Array.from(await getQuestions(id)).length);
    }

    useEffect(() => {
        getCount();
    }, [])

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
                <span>Вопросов в тесте: {questionsCount}, Время прохождения: {questionsCount * 1.25} минут.</span>
                <div className={classes.modalButCont}>
                    <button onClick={() => cancel()}>Отменить</button>
                    <button onClick={() => approve()} disabled={!questionsCount}>Начать</button>
                </div>
            </div>
        </div>
    );
};

export default ModalTestAccept;