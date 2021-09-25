import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context";
import Timer from "../components/UI/timer/Timer";
import Pagination from "../components/Pagination";
import {getQuestions} from "../http/questionsAPI";
import Loader from "../components/UI/Loader/Loader";
import {useHistory} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import {getAnswers} from "../http/answersAPI";

const Test = () => {
    const history = useHistory();
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

    useEffect(() => {
        if(!testName || !testId) {
            history.push('/test_choose');
        }
        fetchQuestions();
    }, []);

    useEffect(() => {
        if(currentQuestion.id) {
            fetchAnswers(currentQuestion.id);
        }
    }, [currentQuestion]);

    const testEnd = () => {
        setTestId('');
        setTestName('');
        history.push('/profile');
    }

    return (
        <div className='test-page'>
            <Timer/>
            <h1 style={{textAlign: 'center'}}>ТЕСТ "{testName}" НАЧАЛСЯ</h1>

            {isQuestionsLoading ??
                <Loader/>
            }

            {questions[questions.length-1]===currentQuestion &&
                <button className='end-testing-but' onClick={() => testEnd()}>Закончить тестирование</button>
            }

            <Pagination questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>


        </div>
    );
};

export default Test;