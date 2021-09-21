const {Result} = require('../models/models');
const ApiError = require('../error/ApiError');


class ResultController {
    async get(req, res) {
        const {userId} = req.query;

        if(!userId) {
            res.json(await Result.findAll());
        } else {
            res.json(await Result.findAll({where:{userId}}));
        }
    }

    async add(req, res, next) {
        const {date, elapsed_time, mark, userId} = req.body;

        if(!date || !elapsed_time || !mark || !userId) {
            return next(ApiError.badRequest('Не указаны все атрибуты!'));
        }

        const result = await Result.create({date, elapsed_time, mark, userId});

        return res.json(result);
    }
}

module.exports = new ResultController();