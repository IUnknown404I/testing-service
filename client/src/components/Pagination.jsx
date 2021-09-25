import React from 'react';

const Pagination = ({questions, currentQuestion, setCurrentQuestion}) => {
    return (
        <div className='pagination-container'>
            {questions.length &&
                questions.map((question, index) =>
                    <button
                        className={currentQuestion.id === question.id
                            ? 'pagination-but current-but'
                            : 'pagination-but'}
                        key={question.id}
                        id={question.id}
                        onClick={() => setCurrentQuestion(question)}
                    >
                        {index + 1}
                    </button>
                )
            }
        </div>
    );
};

export default Pagination;