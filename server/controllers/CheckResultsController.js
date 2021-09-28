const {Valid_Answer} = require("../models/models");
const {ApiError} = require('../error/ApiError');

class CheckResultsController {
    async checkResults(req, res, next) {
        const {userResults} = req.body;
        const answersCount = Object.keys(userResults).length;
        let trueAnswersCount = 0;
        console.log('in: ' + req.body + ', parsed: ' + userResults)

        if(!userResults) {
            next(ApiError.badRequest('Отсутствуют входные данные!'));
        }

        for(const [questionId, value] of Object.entries(userResults)) {
            const {true_answer} = await Valid_Answer.findOne({where:{questionId}});
            if(value.includes('#')) {
                void(0)
            } else {
                if(+value === true_answer) {
                    trueAnswersCount++;
                }
            }
        }

        const result = trueAnswersCount / answersCount * 100;
        console.log(result)

        res.json({result});
    }

    async addValidAns(req, res, next) {
        const {true_answer, questionId} = req.body;

        if(!true_answer || !questionId) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        return res.json(await Valid_Answer.create({true_answer, questionId}));
    }
}

module.exports = new CheckResultsController();