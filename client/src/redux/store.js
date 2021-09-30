import {createStore} from "redux";

const reduxState = {
    answers: {},
    login: '',
    email: '',
    results: {},
}

const reducer = (state = reduxState, action) => {
    switch (action.type) {
        case 'INSERT ANSWER':
            let newAnswers = {};
            Object.assign(newAnswers, state.answers);
            newAnswers[+action.payload.split(':')[0]] = action.payload.split(':')[1];
            return {...state, answers: newAnswers};
        case 'UPDATE ANSWERS':
            return {...state, answers: action.payload};
        case 'CLEAR ANSWERS':
            return {...state, answers: {}};

        case 'INSERT LOGIN':
            return {...state, login: action.payload};

        case 'INSERT EMAIL':
            return {...state, email: action.payload};

        case 'INSERT TOKEN':
            return {...state, token: action.payload};
        case 'DELETE TOKEN':
            return {...state, token: ''};

        case 'INSERT RESULTS':
            return {...state, results: action.payload};
        case 'CLEAR RESULTS':
            return {...state, results: {}};

        default:
            return state;
    }
}

const reduxStore = createStore(reducer);
// reduxStore.subscribe(() => console.info(reduxStore.getState()));

export default reduxStore;