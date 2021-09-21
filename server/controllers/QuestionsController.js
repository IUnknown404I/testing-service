const {Question} = require('../models/models');
const {ApiError} = require('../error/ApiError');

class QuestionsController {
    async addQuestion(req, res, next) {
        const {type, question, testId} = req.body;

        if(!type || !question || !testId) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        const newQuestion = await Question.create({type, question, testId});
        return res.json(newQuestion);
    }

    async getQuestions(req, res) {
        const {question, testId} = req.query;
        let questions = null;

        if(!question && !testId) {
            questions = await Question.findAll();
        }
        else if(!question && testId) {
            questions = await Question.findAll({where:{testId}});
        }
        else if(question && !testId) {
            questions = await Question.findAll({where:{question}});
        }
        else {
            questions = await Question.findAll({where:{question, testId}});
        }

        return res.json(questions);
    }
}

module.exports = new QuestionsController();