import React, {useEffect, useState} from 'react';
import reduxStore from "../../../redux/store";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const Single = ({currentQuestion, answers}) => {
    const [currentChoose, setCurrentChoose] = useState(-1);
    const dispatch = useDispatch();

    useEffect(() => {
        if(reduxStore.getState().answers[currentQuestion.id]) {
            setCurrentChoose(+reduxStore.getState().answers[currentQuestion.id]);
        }
    }, [currentQuestion])

    useEffect(() => {
        if(currentChoose!==-1) {
            dispatch(Actions.insertAnswer(`${currentQuestion.id}:${currentChoose}`));
        }
    }, [currentChoose]);



    return (
        <form className='testing-form'>
            <h2>{currentQuestion.question}</h2>
            {answers?.length
                ? answers.map((ans) =>
                    <label key={ans.id}>
                        <input
                            type={"radio"}
                            key={ans.id}
                            name={ans.questionId}
                            onChange={() => setCurrentChoose(ans.id)}
                            checked={currentChoose===ans.id}
                        />
                            {ans.answer}
                    </label>)
                : void(0)
            }
        </form>
    );
};

export default Single;