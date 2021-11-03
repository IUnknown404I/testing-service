import React, {useEffect, useState} from 'react';
import {BackTop, Button, Col, Row} from "antd";
import {BulbTwoTone, LeftCircleTwoTone} from "@ant-design/icons";
import {chap1_Questions, chap2_Questions, chap3_Questions, multiply, single} from "./index";

const TestMain = ({chapter, setSwitchToChapterTesting}) => {
    const [questions, setQuestions] = useState({});
    const [userAnswers, setUserAnswers] = useState({});
    const [finalize, setFinalize] = useState(false);
    const [result, setResult] = useState({
        percent: 0,
        trueAmount: 0,
        mark: 0,
        wrongQuestions: '',
    });

    const uncheckAll = () => {
        document.querySelectorAll('form').forEach((form) => {
            form.querySelectorAll('label').forEach((label) => {
                label.querySelectorAll('input').forEach((input) => {
                    input.checked = false;
                })
            })
        });
    }

    const verifyUserAnswers = () => {
        let verifiedAnswers = Object.assign(userAnswers);

        for(let i=1; i<Object.keys(questions).length+1; i++) {
            if(!verifiedAnswers[i]) {
                verifiedAnswers[i] = '';
            }
        }
        setUserAnswers(verifiedAnswers);
    }

    const checkResults = () => {
        let validAnswers = [];
        Object.entries(questions).forEach((entry, id) => {
            const [question, descr] = [...entry];
            const [type, ans, valid] = [...descr];
            validAnswers.push(valid);
        });

        let wrongAnswers = [];
        Object.entries(userAnswers).forEach((ans, index) => {
            const [questId, userAnswer] = [...ans];
            if(typeof userAnswer === 'object') {
                if(userAnswer.length !== validAnswers[index].length) wrongAnswers.push(questId);
                else {
                    userAnswer.forEach((variant) => {
                        if(validAnswers[index].indexOf(variant) === -1) wrongAnswers.push(questId);
                    })
                }
            }
            else if(validAnswers[index] !== userAnswer) {
                wrongAnswers.push(questId);
            }
        });

        let wrongAnswersString = '';
        if(wrongAnswers.length !== 0) {
            wrongAnswers.forEach((ans) => {
                wrongAnswersString += `№${ans}, `;
            })
            wrongAnswersString = wrongAnswersString.slice(0, wrongAnswersString.length - 2);
        }

        const percent = (1 - wrongAnswers.length / validAnswers.length).toFixed(1) * 100;
        const trueAmount = validAnswers.length - wrongAnswers.length;
        const mark = percent >= 95
            ? 5
            : percent >= 85
                ? 4
                : percent >= 75
                    ? 3
                    : 2;

        setResult({...result, percent: percent, trueAmount: trueAmount, mark: mark, wrongQuestions: wrongAnswersString});
    }

    useEffect(() => {
        uncheckAll();
        setFinalize(false);
        setUserAnswers({});

        switch (chapter) {
            case 1: setQuestions(chap1_Questions); return;
            case 2: setQuestions(chap2_Questions); return;
            case 3: setQuestions(chap3_Questions); return;
        }
    }, [chapter]);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col span={2} offset={1} style={{textAlign: 'center'}}>
                    <Button
                        onClick={() => {setSwitchToChapterTesting(false)}}
                        icon={<LeftCircleTwoTone />}
                        className='eco-pagination-but'
                        size="large"
                    >
                        К курсу
                    </Button>
                </Col>
                <Col span={12} offset={3} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '27px', fontWeight: 'bold', color: 'darkblue'}}> Тестирование - Раздел {chapter}.</h1>
                </Col>
                <Col span={5} offset={0} style={{textAlign: 'center'}}>
                    <div>
                        <BulbTwoTone />&nbsp;
                        Используйте данное тестирование для самопроверки. Результаты не сохраняются.
                    </div>
                </Col>
            </Row>

            <Row>
                {finalize &&
                    <Col offset={5} span={14}>
                        <div className='eco-test-result'>
                            <div>
                                <strong style={{fontWeight: 'bold'}}>Ваши результаты:</strong> выполнено {result.percent}% ({result.trueAmount} из {Object.keys(questions).length}).&nbsp;
                                <strong style={{fontWeight: 'bold'}}>Итоговая оценка:</strong>&nbsp;
                                <span style={
                                    result.mark === 5 ? {color: 'green'} : result.mark === 4 ? {color: 'orange'} : result.mark === 3 ? {color: 'grey'} : {color: 'red'}
                                }>
                                    {result.mark} балла(ов).
                                </span>
                            </div>
                            {result.wrongQuestions !== '' &&
                            <div>
                                Обратите внимание на следующие вопросы: {result.wrongQuestions} !
                            </div>
                            }
                        </div>
                    </Col>
                }

                <Col offset={4} span={16} className='eco-test-container'>
                    {Object.entries(questions).map((entry, id) => {
                        const [question, descr] = [...entry];
                        const [type, ans, valid] = [...descr];

                        if(type === 'single') {
                            return single(question, ans, valid, id+1, finalize, userAnswers, setUserAnswers);
                        }
                        else if(type === 'multiply') {
                            return multiply(question, ans, valid, id+1, finalize, userAnswers, setUserAnswers);
                        }
                    })}
                </Col>
                <Col span={24} className='eco-img-col'>
                    <div className='eco-test-buttons-container'>
                        {finalize
                            ?
                            <Button
                                onClick={() => {
                                    setFinalize(false);
                                    setUserAnswers({});
                                    uncheckAll();

                                    window.scrollTo(0,0)
                                }}
                                size="large"
                            >
                                Пройти тест повторно
                            </Button>
                            :
                            <Button
                                onClick={() => {
                                    verifyUserAnswers();
                                    checkResults();
                                    setFinalize(true);

                                    window.scrollTo(0,0)
                                }}
                                size="large"
                            >
                                Проверить результаты
                            </Button>
                        }
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TestMain;