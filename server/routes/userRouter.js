const Router = require('express');
const router = new Router;
const controller = require('../controllers/UserController');
const resController = require('../controllers/ResultController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/authorization', controller.authorization);
router.post('/registration', controller.registration);
router.get('/auth', authMiddleware, controller.checkAuth);

router.get('/result', resController.get);
router.post('/result', resController.add);


module.exports = router;