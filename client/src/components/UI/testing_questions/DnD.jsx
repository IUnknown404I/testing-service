import React, {useEffect, useRef, useState} from 'react';
import reduxStore from "../../../redux/store";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const DnD = ({answers, currentQuestion}) => {
    const [userAnswers, setUserAnswers] = useState('#');
    const [defaultBordCards, setDefaultBordCards] = useState([]);
    const [validBordCards, setValidBordCards] = useState([]);
    const dispatch = useDispatch();
    const dragRef = useRef(null);

    const findAnswer = (isDefaultBoard) => {
        let indexOfAns = null;
        const board = isDefaultBoard ? validBordCards : defaultBordCards;
        const ans = board.find((item, index) => {
            if(+item.id === +dragRef.current.id) {
                indexOfAns = index;
                return true;
            }
        });

        return [indexOfAns, ans];
    }

    const dragStartHandler = (e) => {
        dragRef.current = e.target;
    }

    const dragEndHandler = () => {
        dragRef.current = undefined;

        return undefined;
    }

    const dragOverHandler = (e) => {
        e.preventDefault();

        if(e.target.className.includes('card-container')) {
            e.target.style.background = 'lightgreen';
        } else if(e.target.parentNode.className.includes('card-container')) {
            e.target.parentNode.style.background = 'lightgreen';
        }
    }

    const dragLeaveHandler = (e) => {
        if(e.target.className.includes('card-container')) {
            e.target.style.background = e.target.className.includes('default')
                ? 'linen'
                : 'lightyellow'
        }
    }

    const dropHandler = (e) => {
        e.preventDefault();

        const board =  e.target.closest('.card-container');
        board.style.background = board.className.includes('default')
            ? 'linen'
            : 'lightyellow'

        if(board.className.includes('default')) {
            const [ansId, ans] = findAnswer(true);

            if(ans) {
                const newValidArray = validBordCards;
                newValidArray.splice(ansId, 1);
                setValidBordCards(newValidArray);
                setDefaultBordCards([...defaultBordCards, ans]);

                if(userAnswers[0] === '#') {
                    setUserAnswers(userAnswers.replace('#', '').replace(`${ans.id}#`, ''));
                } else {
                    setUserAnswers(userAnswers.replace(`${ans.id}#`, ''));
                }
            }
        } else {
            const [ansId, ans] = findAnswer(false);

            if(ans) {
                const newDefaultArray = defaultBordCards;
                newDefaultArray.splice(ansId, 1);
                setDefaultBordCards(newDefaultArray);
                setValidBordCards([...validBordCards, ans]);

                if(userAnswers[0] === '#') {
                    setUserAnswers(userAnswers.replace('#', '') + ans.id + '#');
                } else {
                    setUserAnswers(userAnswers + ans.id + '#');
                }
            }
        }
    }

    useEffect(() => {
        if(!reduxStore.getState().answers[currentQuestion.id]) {
            setDefaultBordCards(answers);
        } else {
            const answersState = reduxStore.getState().answers[currentQuestion.id];
            let newAnswers = '';

            for(let answer of answers) {
                if(answersState.includes(answer.id)) {
                    let newValidCards = validBordCards;
                    newValidCards.push(answer);
                    setValidBordCards(newValidCards);

                    newAnswers += answer.id + '#';
                } else {
                    let newDefaultCards = defaultBordCards;
                    newDefaultCards.push(answer);
                    setDefaultBordCards(newDefaultCards);
                }
            }
            setUserAnswers(newAnswers);
        }
    }, [currentQuestion]);

    useEffect(() => {
        if(userAnswers!=='#') {
            dispatch(Actions.insertAnswer(`${currentQuestion.id}:${userAnswers}`));
        }
    }, [userAnswers]);


    return (
        <form className='dnd-form'>
            <h2>{currentQuestion.question}</h2>

            <div className='dnd-container'>
                <fieldset
                    className='card-container default'
                    onDragOver={e => dragOverHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDrop={e => dropHandler(e)}
                >
                    <legend>Варианты</legend>
                    {defaultBordCards.length ?
                        defaultBordCards.map((card) =>
                            <div
                                key={card.id}
                                id={card.id}
                                className='card'
                                draggable="true"
                                onDragOver={e => dragOverHandler(e)}
                                onDragStart={e => dragStartHandler(e)}
                                onDragEnd={() => dragEndHandler()}
                            >
                                {card.answer}
                            </div>)
                        : void (0)
                    }
                </fieldset>

                <fieldset
                    className='card-container valid'
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropHandler(e)}
                >
                    <legend>Ответы</legend>
                    {validBordCards.length ?
                        validBordCards.map((card) =>
                            <div
                                key={card.id}
                                id={card.id}
                                className='card'
                                draggable="true"
                                onDragOver={e => dragOverHandler(e)}
                                onDragStart={e => dragStartHandler(e)}
                                onDragEnd={() => dragEndHandler()}
                            >
                                {card.answer}
                            </div>)
                        : void (0)
                    }
                </fieldset>
            </div>

        </form>
    );
};

export default DnD;