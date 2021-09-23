import {createStore} from "redux";

const reduxState = {
    answers: [0,0,0,0,0,0,0,0,0,0],
    login: '',
    email: '',
    token: ''
}

const reducer = (state = reduxState, action) => {
    switch (action.type) {
        case 'INSERT ANSWER':
            const newAnswers = state.answers;
            newAnswers[+action.payload.split(':')[0]] = +action.payload.split(':')[1]
            return {...state, answers: newAnswers}
        case 'CLEAR ANSWERS':
            return {...state, answers: [0,0,0,0,0,0,0,0,0,0]}
        case 'INSERT LOGIN':
            return {...state, login: action.payload}
        case 'INSERT EMAIL':
            return {...state, email: action.payload}
        case 'INSERT TOKEN':
            return {...state, token: action.payload}
        case 'DELETE TOKEN':
            return {...state, token: ''}
        default:
            return state
    }
}

const reduxStore = createStore(reducer);
reduxStore.subscribe(() => console.info(reduxStore.getState()));

export default reduxStore;