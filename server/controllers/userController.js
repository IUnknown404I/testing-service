const jwtDecode = require('jwt-decode');
const ApiError = require("../error/ApiError");
const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, login, email, role) => {
    return jwt.sign(
        {id, login, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
};

class UserController {
    async registration(req, res, next) {
        const {login, password, email, role} = req.body;
        if(!login || !password) {
            return next(ApiError.internalError('Некорректный логин или пароль!'));
        }

        const candidate = await User.findOne({where:{login}});
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким логином уже существует!'));
        }
        if(email) {
            const emailCheck = await User.findOne({where:{email}});
            if(emailCheck) {
                return next(ApiError.badRequest('Эта почта уже используется!'));
            }
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = await User.create({login, password: hashPassword, email, role});
        const jwtToken = generateJwt(newUser.id, newUser.login, newUser.email, newUser.role);

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
            return next(ApiError.badRequest('Указан неправильный пароль!'));
        }

        const jwtToken = generateJwt(candidate.id, candidate.login, candidate.email, candidate.role);
        return res.json({jwtToken});
    }

    async checkAuth(req, res) {
        const decodedJWT = jwtDecode(req.headers.authorization.split(' ')[1]);

        const jwtToken = generateJwt(decodedJWT.id, decodedJWT.login, decodedJWT.email, decodedJWT.role);
        return res.json({jwtToken});
    }
}


module.exports = new UserController();