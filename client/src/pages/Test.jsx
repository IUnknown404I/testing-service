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
import DnDcopy from "../components/UI/testing_questions/DnD_copy";
import {checkResults} from "../http/resultsAPI";

const Test = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {testName, testId, setTestId, setTestName} = useContext(AuthContext);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [answers, setAnswers] = useState([]);

    const [fetchQuestions, isQuestionsLoading] = useFetching(async () => {
        const res = await getQuestions(testId);
        setQuestions(res);
        setCurrentQuestion(res[0])
    });
    const [fetchAnswers, isAnswersLoading] = useFetching(async () => {
        const res = await getAnswers(currentQuestion.id);
        setAnswers(res);
    });

    const testEnd = () => {
        const userResults = reduxStore.getState().answers;
        if(Object.keys(userResults).length !== Object.keys(questions).length) {
            if(!window.confirm('Вы не ответили на все вопросы, закончить тест? Все неотвеченные вопросы будут помечены как нерешённые.')) {
                return;
            } else {
                questions.forEach((question) => {
                    if(!userResults[question.id]) {
                        userResults[question.id] = '0';
                    }
                });
            }
        }
        console.log(userResults)
        console.log(checkResults(userResults));

        setTestId('');
        setTestName('');
        history.push('/profile');
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

    useEffect(() => {
        if(!testName || !testId) {
            history.push('/test_choose');
        }
        fetchQuestions();

        return () => {
            setTestId('');
            setTestName('');
            dispatch(Actions.clearAnswers());
        }
    }, []);

    useEffect(() => {
        if(currentQuestion.id) {
            fetchAnswers(currentQuestion.id);
        }
    }, [currentQuestion]);


    return (
        <div className='test-page'>
            <Prompt
                when={Object.keys(reduxStore.getState().answers).length !== Object.keys(questions).length}
                message="Вы не ответили на все вопросы, закончить тест? Все неотвеченные вопросы будут помечены как нерешённые."
            />

            <Timer/>
            <h1 style={{textAlign: 'center'}}>Тестирование по теме "{testName}"</h1>

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