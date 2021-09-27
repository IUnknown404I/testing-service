const {True_answer, Question} = require("../models/models");
const {ApiError} = require('../error/ApiError');

class CheckResultsController {
    async checkResults(req, res, next) {
        const ans = [
            {
                id_quest: 'ara',
                ans: '2'
            },
            {
                id_quest: 'mara',
                ans: '666'
            }

        ]
        res.json(ans);
    }
}

module.exports = new CheckResultsController();