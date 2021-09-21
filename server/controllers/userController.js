const ApiError = require("../error/ApiError");
const {User} = require('../models/models');

class UserController {
    async registration(req, res, next) {
        try {
            const {login, password, role} = req.body; //or body

            if(!login || !password || !role) {
                return next(ApiError.badRequest('Не задан ID!'));
            }

            const user = await User.create({login, password, role});
            return res.json(user);
        } catch (e) {
            console.log(e)
            return res.json(req);
        }
    }

    async authorization(req, res) { //login
        res.json('Authorization: ');

    }

    async checkAuth(req, res, next) {
        const {login} = req.query;

        if(!login) {
            return next(ApiError.badRequest('Не указан Логин!'));
        } else {
            return res.json(await User.findAll({where:{login}}));
        }
    }
}

module.exports = new UserController();