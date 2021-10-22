import React from 'react';
import classes from './ResultsModal.module.css'
import reduxStore from "../../../redux/store";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const ResultsModal = ({setModal, setReturnFromTest}) => {
    const {create, mistakesAccumulator} = reduxStore.getState().results;
    const dispatch = useDispatch();

    const forward = () => {
        setModal(false);
        if(setReturnFromTest) {
            setReturnFromTest(true);
        }
        dispatch(Actions.clearAnswers());
    }

    return (
        <div className={classes.res_opacity}>
            <div className={classes.res_container}>
                <fieldset className={classes.res_info}>
                    <legend>Результат</legend>
                    <span><strong>Логин пользователя:</strong> {reduxStore.getState().login}</span>
                    <span><strong>Тема тестирования:</strong> {create.test_name}</span>
                    <span><strong>Дата:</strong> {create.date}</span>
                    <span>
                        <strong>Затраченное время: </strong>
                        {create.elapsed_time >= 60
                            ? (Math.trunc(create.elapsed_time / 60)+'мин '
                                    + (create.elapsed_time % 60 !== 0 ? (create.elapsed_time % 60)+'с' : ''))
                            : ((create.elapsed_time % 60) + 'с')}
                    </span>
                    <hr/>
                    <span>
                        <strong>Итоговый результат: </strong>
                        <span
                            className={classes.res_span}
                            style={{color: create.mark===5 ? 'green': create.mark===4 ? 'orange': create.mark===3 ? 'gray':'red'}}
                        >
                            {create.mark}
                        </span>
                    </span>
                </fieldset>

                {mistakesAccumulator?.length
                    ?
                    <div className={classes.res_errors_container}>
                        <h2>Допущенные ошибки</h2>

                        <div className={classes.res_errors}>
                            {mistakesAccumulator.map((miss, index) =>
                                <div key={index+1} className={classes.error}>
                                    <strong>Вопрос: </strong><i>{miss.question}</i><br/>
                                    {Array.isArray(miss.mistake)
                                        ?
                                        <span>
                                        <strong>Ошибки: </strong>
                                            {miss.mistake.map((err, index) =>
                                                <span key={index+666}>
                                                {err !== 'Ответ не полон.' ? `"${err}"; ` : `${err}`}
                                            </span>)
                                            }
                                    </span>
                                        : <span><strong>Ошибка: </strong>{miss.mistake}</span>
                                    }

                                </div>
                            )

                            }
                        </div>
                    </div>
                    : void(0)
                }

                <button onClick={() => {forward()}}>Продолжить</button>
            </div>
        </div>
    );
};

export default ResultsModal;