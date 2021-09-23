export class Actions {
    static insertAnswer(payload) {
        return {
            type: 'INSERT ANSWER',
            payload: payload
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

    static clearAnswers() {
        return {
            type: 'CLEAR ANSWERS'
        }
    }

    static insertToken(payload) {
        return {
            type: 'INSERT TOKEN',
            payload: payload
        }
    }
}