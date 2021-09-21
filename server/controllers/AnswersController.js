const {Answer} = require('../models/models');
const {ApiError} = require('../error/ApiError');

class AnswersController {
    async getAnswers(req, res) {
        const {answer, questionId} = req.query;
        let cur_answer = null;

        if(!answer && !questionId) {
            cur_answer = await Answer.findAll();
        }
        else if(!answer && questionId) {
            cur_answer = await Answer.findAll({where:{questionId}});
        }
        else if(answer && !questionId) {
            cur_answer = await Answer.findAll({where:{answer}});
        } else {
            cur_answer = await Answer.findAll({where:{answer, questionId}});
        }

        return res.json(cur_answer);
    }

    async addAnswer(req, res, next) {
        const {answer, questionId} = req.body;

        if(!answer || !questionId) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        return res.json(await Answer.create({answer, questionId}));
    }
}

module.exports = new AnswersController();