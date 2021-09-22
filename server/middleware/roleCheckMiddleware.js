const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
            if(req.method === 'OPTIONS') {
                next();
            }

            try {
                const token = req.headers.authorization.split(' ')[1];
                if(!token) {
                    res.status(401).json({message: 'Не авторизован!'});
                }

                const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
                if(decodedToken.role !== 'ADMIN') {
                    res.status(403).json({message: 'Нет прав доступа!'});
                }
                req.user = decodedToken;

                // вызываем следующий в цепочке мидлвейер
                next();
            } catch (e) {
                res.status(401).json({message: 'Не авторизован!'});
            }
        };
}

