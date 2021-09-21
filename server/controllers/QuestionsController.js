const {Question, Answer} = require('../models/models');
const {ApiError} = require('../error/ApiError');

class QuestionsController {
    async addQuestion(req, res, next) {
        const {type, question, testId} = req.body;
        let {ans} = req.body;

        if(!type || !question || !testId) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        const newQuestion = await Question.create({type, question, testId});

        if(ans) {
            ans = JSON.parse(ans);

            ans.forEach((a) => {
                Answer.create({
                    answer: a.answer,
                    questionId: newQuestion.id
                });
            });
        }

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
            questions = await Question.findOne({where:{question}});
        }
        else {
            questions = await Question.findOne({where:{question, testId}});
        }

        return res.json(questions);
    }
}

module.exports = new QuestionsController();