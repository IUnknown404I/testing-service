const {Test} = require('../models/models');
const ApiError = require('../error/ApiError');

class TestController {
    async getTests(req, res, next) {
        const {name} = req.query;

        if(!name) {
            return res.json(await Test.findAll());
        } else {
            return res.json(await Test.findAll({where:{name}}));
        }
    }

    async addTest(req, res, next) {
        const {name} = req.body;

        if(!name) {
            return next(ApiError.badRequest('Не задан NAME!'));
        }

        const test = await Test.create({name});

        return res.json(test);
    }
}


module.exports = new TestController();