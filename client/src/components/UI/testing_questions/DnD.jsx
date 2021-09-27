import React, {useEffect, useState} from 'react';
import reduxStore from "../../../redux/store";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const DnD = ({answers, currentQuestion}) => {
    const [userAnswers, setUserAnswers] = useState('');
    const [defaultBordCards, setDefaultBordCards] = useState([]);
    const [validBordCards, setValidBordCards] = useState([]);
    const dispatch = useDispatch();


    const dragStartHandler = (e) => {
        console.log(e.target)
    }

    const dragEndHandler = (e) => {
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
    }

    useEffect(() => {
        if(!reduxStore.getState().answers[currentQuestion.id]) {
            setDefaultBordCards(answers);
        } else {
            const answersState = reduxStore.getState().answers[currentQuestion.id];

            for(let answer of answers) {
                if(answersState.includes(answer.id)) {
                    setValidBordCards(validBordCards.push(answer));
                } else {
                    setDefaultBordCards(defaultBordCards.push(answer));
                }
            }
        }
    }, [currentQuestion]);

    useEffect(() => {
        if(validBordCards.length) {
            dispatch(Actions.insertAnswer(`${currentQuestion.id}:${userAnswers}`));
        }
    }, [validBordCards]);


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
                                className='card'
                                draggable="true"
                                onDragOver={e => dragOverHandler(e)}
                                onDragStart={e => dragStartHandler(e)}
                                onDragEnd={e => dragEndHandler(e)}
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
                                className='card'
                                draggable="true"
                                onDragOver={e => dragOverHandler(e)}
                                onDragStart={e => dragStartHandler(e)}
                                onDragEnd={e => dragEndHandler(e)}
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