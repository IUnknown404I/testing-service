import React, {useEffect, useState} from 'react';
import reduxStore from "../../../redux/store";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";

const DnDcopy = ({answers, currentQuestion}) => {
    const [userAnswers, setUserAnswers] = useState('');
    const [defaultBordCards, setDefaultBordCards] = useState([]);
    const [validBordCards, setValidBordCards] = useState([]);
    const dispatch = useDispatch();



    const handle = (event) => {
        let isDragging = false;

        document.addEventListener('pointerdown', function(event) {
            let dragElement = event.target.closest('.draggable');
            let parentDroppable = event.target.closest('.droppable');
            let currentDroppable = null;

            if (!dragElement) return;

            event.preventDefault();
            dragElement.ondragstart = function() {
                return false;
            };

            let shiftX, shiftY;

            startDrag(dragElement, event.clientX, event.clientY);


            function onPointerUp(event) {
                finishDrag(event);
            }
            function onPointerMove(event) {
                moveAt(event.clientX, event.clientY);

                if(!event.target.classList.contains('draggable')) return;

                event.target.hidden = true;
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                event.target.hidden = false;

                if (!elemBelow) return;

                let dropReceiver = elemBelow.closest('.droppable');

                if(currentDroppable !== dropReceiver) {
                    if(currentDroppable) {
                        leaveReciever(currentDroppable);
                    }

                    currentDroppable = dropReceiver;
                    if(currentDroppable) {
                        enterReciever(currentDroppable);
                    }
                }
            }

            function startDrag(element, clientX, clientY) {
                if(isDragging) {
                    return;
                }
                isDragging = true;

                document.addEventListener('pointermove', onPointerMove);
                element.addEventListener('pointerup', onPointerUp);

                shiftX = clientX - element.getBoundingClientRect().left;
                shiftY = clientY - element.getBoundingClientRect().top;

                element.style.position = 'fixed';
                element.style.zIndex = '9999';
                document.body.append(element);

                moveAt(clientX, clientY);
            }

            function finishDrag(event) {
                if(!isDragging) {
                    return;
                }

                isDragging = false;
                dragElement.style.position = 'static';
                dragElement.style.zIndex = '0';
                dragElement.style.top = '0';
                dragElement.style.right = '0';
                dragElement.style.left = '0';

                if(currentDroppable) {
                    leaveReciever(currentDroppable);
                    currentDroppable.append(event.target);
                } else {
                    parentDroppable.append(event.target);
                }

                document.removeEventListener('pointermove', onPointerMove);
                dragElement.removeEventListener('pointerup', onPointerUp);
            }

            function moveAt(clientX, clientY) {
                let newX = clientX - shiftX;
                let newY = clientY - shiftY;

                let newBottom = newY + dragElement.offsetHeight + 4;

                if (newBottom > document.documentElement.clientHeight) {
                    let docBottom = document.body.getBoundingClientRect().bottom;

                    let scrollY = Math.min(docBottom - newBottom, 10);

                    if (scrollY < 0) scrollY = 0;

                    window.scrollBy(0, scrollY);

                    newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
                }

                if (newY < 0) {
                    let scrollY = Math.min(-newY, 10);
                    if (scrollY < 0) scrollY = 0;

                    window.scrollBy(0, -scrollY);
                    newY = Math.max(newY, 0);
                }

                if (newX < 8) newX = 8;
                if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
                    newX = document.documentElement.clientWidth - dragElement.offsetWidth;
                }

                dragElement.style.left = newX + 'px';
                dragElement.style.top = newY + 'px';
            }

            function enterReciever(elem) {
                elem.style.background = 'lightgreen';
                console.log('Enter reciever: ' + elem +" "+ elem.className);
            }

            function leaveReciever(elem) {
                elem.style.background = '';
                console.log('Leave reciever: ' + elem +" "+ elem.className);
            }

        });
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
                    className='card-container default droppable'
                >
                    <legend>Варианты</legend>
                    {defaultBordCards.length ?
                        defaultBordCards.map((card) =>
                            <div
                                key={card.id}
                                className='card draggable'
                                onPointerDown={e => handle(e)}
                            >
                                {card.answer}
                            </div>)
                        : void (0)
                    }
                </fieldset>

                <fieldset
                    className='card-container valid droppable'
                >
                    <legend>Ответы</legend>
                    {validBordCards.length ?
                        validBordCards.map((card) =>
                            <div
                                key={card.id}
                                className='card draggable'
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

export default DnDcopy;