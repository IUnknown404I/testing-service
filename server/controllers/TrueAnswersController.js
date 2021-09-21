const {True_answer} = require('../models/models');
const {ApiError} = require('../error/ApiError');

class TrueAnswersController {
    async getTrueAnswers(req, res) {
        const {testId} = req.query;

        if(!testId) {
            return res.json(await True_answer.findAll());
        } else {
            return res.json(await True_answer.findOne({where:{testId}}));
        }
    }

    async addTrueAnswers(req, res, next) {
        const {valid_answers, testId} = req.body;

        if(!valid_answers || !testId) {
            return next(ApiError.badRequest('Не указан testId!'));
        }

        return res.json(await True_answer.create({valid_answers, testId}));
    }
}

module.exports = new TrueAnswersController();