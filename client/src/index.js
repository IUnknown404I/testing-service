import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const reduxState = {
    answers: [0,0,0,0,0,0,0,0,0,0]
}
const reducer = (state = reduxState, action) => {
    switch (action.type) {
        case 'INSERT':
            return {...reduxState, answers: (reduxState.answers[action.payload.split(':')[0]] = +action.payload.split(':')[1])}
        default:
            return state;
    }
}
const reduxStore = createStore(reducer);

ReactDOM.render(

    <Provider store={reduxStore}>
        <App />
    </Provider>,

  document.getElementById('root')
);
