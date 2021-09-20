const Router = require('express');
const router = new Router;
const controller = require('../controllers/userController');


router.post('/authorization', controller.authorization);

router.post('/registration', controller.registration);

router.get('/auth', controller.checkAuth);


module.exports = router;