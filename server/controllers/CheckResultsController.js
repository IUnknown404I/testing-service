const {Valid_Answer, User, Result} = require("../models/models");
const ApiError = require('../error/ApiError');

class CheckResultsController {
    async checkResults(req, res, next) {
        const {userResults, elapsed_time, test_name, login} = req.body;
        const answersCount = Object.keys(userResults).length;
        const mistakesAccumulator = [];
        let trueAnswersCount = 0;
        if(!userResults || !elapsed_time || !test_name || !login) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        for(const [questionId, value] of Object.entries(userResults)) {
            if(await checkAnswer(value, questionId, mistakesAccumulator)) {
                trueAnswersCount++
            }
        }
        const percent = trueAnswersCount / answersCount * 100;

        const mark = percent <= 75 ? 2
            : percent <= 85 ? 3
                : percent <= 95 ? 4
                    : 5;
        const date = getDate();
        const {id} = await User.findOne({where:{login}});
        const userId = id;

        const create = await Result.create({test_name, date, elapsed_time, mark, userId});
        return res.json({create, mistakesAccumulator});
    }

    async addValidAns(req, res, next) {
        const {true_answer, questionId} = req.body;

        if(!true_answer || !questionId) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        return res.json(await Valid_Answer.create({true_answer, questionId}));
    }
}


const checkAnswer = async (value, questionId, mistakesAccumulator) => {
    if(value.includes('#')) {
        let questionResult = true;
        const trueAnswers = [];
        let mistakes = '';
        [...await Valid_Answer.findAll({where:{questionId}})].forEach((obj) => {
            trueAnswers.push(obj.dataValues.true_answer);
        })

        value.split('#').forEach((ans) => {
            if(ans!=='') {
                if(trueAnswers.indexOf(+ans) === -1) {
                    questionResult = false;
                    mistakes += ans+'#';
                } else {
                    trueAnswers.splice(trueAnswers.indexOf(+ans), 1);
                }
            }
        })

        if(trueAnswers.length) {
            mistakes += 'Ответ не полон.#'
        }
        if(mistakes) {
            mistakesAccumulator.push({questionId:{questionId}, ans:{mistakes}});
        }
        return questionResult && !trueAnswers.length;
    } else {
        const {true_answer} = await Valid_Answer.findOne({where:{questionId}});

        if(+value !== true_answer) {
            mistakesAccumulator.push({questionId:{questionId}, ans:{value}});
        }
        return +value === true_answer;
    }
}

const getDate = () => {
    const Data = new Date();
    const Year = Data.getFullYear();
    const Month = Data.getMonth();
    let rusMonth;
    const Day = Data.getDate();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();

    switch (Month)
    {
        case 0: rusMonth="января"; break;
        case 1: rusMonth="февраля"; break;
        case 2: rusMonth="марта"; break;
        case 3: rusMonth="апреля"; break;
        case 4: rusMonth="мае"; break;
        case 5: rusMonth="июня"; break;
        case 6: rusMonth="июля"; break;
        case 7: rusMonth="августа"; break;
        case 8: rusMonth="сентября"; break;
        case 9: rusMonth="октября"; break;
        case 10: rusMonth="ноября"; break;
        case 11: rusMonth="декабря"; break;
    }

    return(`${Day} ${rusMonth} ${Year}г, ${Hour}ч ${Minutes}мин`)
}


module.exports = new CheckResultsController();