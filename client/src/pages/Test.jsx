import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context";
import Timer from "../components/UI/timer/Timer";
import Pagination from "../components/Pagination";
import {getQuestions} from "../http/questionsAPI";
import Loader from "../components/UI/Loader/Loader";
import {Prompt, useHistory} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import {getAnswers} from "../http/answersAPI";
import reduxStore from "../redux/store";
import {useDispatch} from "react-redux";
import {Actions} from "../redux/actions";
import Single from "../components/UI/testing_questions/Single";
import Multiply from "../components/UI/testing_questions/Multiply";
import DnD from "../components/UI/testing_questions/DnD";
import {checkResults} from "../http/resultsAPI";
import usePreventReload from "../hooks/usePreventReload";
import DnDcopy from "../components/UI/testing_questions/DnD_copy";

const Test = () => {
    usePreventReload(true);
    const history = useHistory();
    const dispatch = useDispatch();
    const {testName, testId, setTestId, setTestName, timeLimit, setTimeLimit} = useContext(AuthContext);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);
    // const [canEnd, setCanEnd] = useState(false);

    const [fetchQuestions, isQuestionsLoading] = useFetching(async () => {
        const res = await getQuestions(testId);
        shuffle(res);

        setQuestions(res);
        setCurrentQuestion(res[0])
    });
    const [fetchAnswers, isAnswersLoading] = useFetching(async () => {
        const res = await getAnswers(currentQuestion.id);
        setAnswers(res);
    });

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    const navigation = (isNext) => {
        let currentQuestionId;
        questions.find((item, index, array) => {
            if(item.id===currentQuestion.id) {
                currentQuestionId = index;
                return true;
            } else
                return false;
        });

        isNext
            ? currentQuestionId!==questions.length-1 &&
            setCurrentQuestion(questions[currentQuestionId + 1])
            : currentQuestionId!==0 &&
            setCurrentQuestion(questions[currentQuestionId - 1])
    }

    const testEnd = () => {
        const userResults = reduxStore.getState().answers;
        if(Object.keys(userResults).length !== Object.keys(questions).length) {
            if(!(time >= timeLimit) && !window.confirm('Вы не ответили на все вопросы, закончить тест? Все неотвеченные вопросы будут помечены как нерешённые.')) {
                return;
            } else {
                questions.forEach((question) => {
                    if(!userResults[question.id]) {
                        userResults[question.id] = '0';
                    }
                });
            }
        }

        // setCanEnd(true);
        dispatch(Actions.updateAnswers(userResults));
        checkResults(userResults, time, testName, reduxStore.getState().login).then(res => dispatch(Actions.insertResults(res)));
        history.push('/test_choose');
    }

    useEffect(() => {
        if(!testName || !testId) {
            history.push('/test_choose');
        }
        fetchQuestions();

        return () => {
            setTestId('');
            setTestName('');
            setTimeLimit(0);
            dispatch(Actions.clearAnswers());
        }
    }, []);

    useEffect(() => {
        if(currentQuestion.id) {
            fetchAnswers(currentQuestion.id);
        }
    }, [currentQuestion]);

    useEffect(() => {
        if(time >= timeLimit) {
            testEnd();
        }
    }, [time]);


    return (
        <div className='test-page'>
            {/*<Prompt*/}
            {/*    // when={Object.keys(reduxStore.getState().answers).length !== Object.keys(questions).length}*/}
            {/*    when={!canEnd}*/}
            {/*    message="Вы не ответили на все вопросы, закончить тест? Все неотвеченные вопросы будут помечены как нерешённые."*/}
            {/*/>*/}
            <div className='navBarReplacer'><span>Тестирование по теме "{testName}"</span></div>


            <Timer time={time} setTime={setTime}/>

            {isQuestionsLoading || isAnswersLoading
                ? <Loader/>
                :
                <div className='testing-container'>
                    {currentQuestion.type==='text'
                        ? <Single currentQuestion={currentQuestion} answers={answers}/>
                        : currentQuestion.type==='multiply'
                            ? <Multiply currentQuestion={currentQuestion} answers={answers}/>
                            : currentQuestion.type==='dd' &&
                                <DnD currentQuestion={currentQuestion} answers={answers}/>
                                // <DnDcopy currentQuestion={currentQuestion} answers={answers}/>
                    }

                    <div className='testing-nav'>
                        <button onClick={() => navigation(false)}>Предыдущий</button>
                        <button onClick={() => navigation(true)}>Следующий</button>
                    </div>
                </div>
            }

            {questions[questions.length-1]===currentQuestion &&
                <button className='end-testing-but' onClick={() => testEnd()}>Закончить тестирование</button>
            }
            <Pagination questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>

        </div>
    );
};

export default Test;