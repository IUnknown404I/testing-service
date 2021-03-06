export class Actions {
    static insertAnswer(payload) {
        return {
            type: 'INSERT ANSWER',
            payload: payload
        }
    }

    static updateAnswers(payload) {
        return {
            type: 'UPDATE ANSWERS',
            payload: payload
        }
    }

    static clearAnswers() {
        return {
            type: 'CLEAR ANSWERS'
        }
    }

    static insertLogin(payload) {
        return {
            type: 'INSERT LOGIN',
            payload: payload
        }
    }

    static insertEmail(payload) {
        return {
            type: 'INSERT EMAIL',
            payload: payload
        }
    }

    static insertResults(payload) {
        return {
            type: 'INSERT RESULTS',
            payload: payload
        }
    }

    static clearResults() {
        return {
            type: 'INSERT RESULTS'
        }
    }
}