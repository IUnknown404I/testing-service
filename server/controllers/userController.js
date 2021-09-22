const ApiError = require("../error/ApiError");
const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
};

class UserController {
    async registration(req, res, next) {
        const {login, password, role} = req.body;
        if(!login || !password) {
            return next(ApiError.badRequest('Некорректный emal или password!'));
        }

        const candidate = await User.findOne({where:{login}});
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким логином уже существует!'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = await User.create({login, password: hashPassword, role});
        const jwtToken = generateJwt(newUser.id, login, role);

        return res.json({jwtToken});
    }

    async authorization(req, res, next) {
        const {login, password} = req.body;
        const candidate = await User.findOne({where:{login}});
        if(!candidate) {
            return next(ApiError.internalError('Пользователь не найден!'));
        }

        let comparePassword = bcrypt.compareSync(password, candidate.password);
        if(!comparePassword) {
            return next(ApiError.internalError('Указан неправильный пароль!'));
        }

        const jwtToken = generateJwt(candidate.id, candidate.login, candidate.role);
        return res.json({jwtToken});
    }

    async checkAuth(req, res) {
        return res.json(generateJwt(req.user.id, req.user.login, req.user.password, req.user.role));
    }
}

module.exports = new UserController();