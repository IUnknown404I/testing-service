const {True_answer, Question} = require("../models/models");
const {ApiError} = require('../error/ApiError');

class CheckResultsController {
    async checkResults(req, res, next) {
        const {testId, answers} = req.body;
        if (!testId || !answers) {
            return next(ApiError.badRequest('Не указаны необходимые атрибуты!'));
        }

        const {valid_answers} = await True_answer.findOne({where: {testId}});
        const question = await Question.findAll({where: {testId}});
        const validAns = Array.from(valid_answers);
        let percent = 0;
        let mistakes = [];

        for(let i = 0; i < validAns.length; i++) {
            if(validAns[i] === Array.from(answers)[i]) {
                percent++;
            } else {
                mistakes.push({question:question[i].dataValues.question, questionId: question[i].dataValues.id});
            }
        }

        if(percent === 0) {
            return res.json({result: '0'});
        } else {
            percent = (percent / validAns.length * 100).toFixed(2);
            return res.json({result: percent, mistakes: mistakes});
        }
    }
}

module.exports = new CheckResultsController();