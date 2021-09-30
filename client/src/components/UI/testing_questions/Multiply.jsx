import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";
import reduxStore from "../../../redux/store";

const Multiply = ({currentQuestion, answers}) => {
    const dispatch = useDispatch();
    const [currentAnswers, setCurrentAnswers] = useState('#');

    const checkVerify = (event) => {

        if(event.target.checked) {
            if(currentAnswers[0] === '#') {
                setCurrentAnswers(currentAnswers.replace('#', '') + event.target.id + '#');
            } else {
                setCurrentAnswers(currentAnswers + event.target.id + '#');
            }
        } else {
            setCurrentAnswers(currentAnswers.replace(`${event.target.id}#`, ''));
        }
    }

    useEffect(() => {
        if(reduxStore.getState().answers[currentQuestion.id]) {
            setCurrentAnswers(reduxStore.getState().answers[currentQuestion.id]);
        }
    }, [currentQuestion]);

    useEffect(() => {
        if(currentAnswers!=='#') {
            dispatch(Actions.insertAnswer(`${currentQuestion.id}:${currentAnswers}`))
        }
    }, [currentAnswers]);

    return (
        <form className='testing-form'>
            <h2>{currentQuestion.question}</h2>
            {answers?.length
                ? answers.map((ans) =>
                    <label key={ans.id}>
                        <input
                            type={"checkbox"}
                            id={ans.id}
                            name={ans.questionId}
                            checked={currentAnswers.includes(ans.id)}
                            onChange={(event => checkVerify(event))}
                        />
                            {ans.answer}
                    </label>)
                : void(0)
            }
        </form>
    );
};

export default Multiply;