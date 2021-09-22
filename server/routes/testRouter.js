const Router = require('express');
const router = new Router;
const controller = require('../controllers/TestController');
const controllerTrue = require('../controllers/TrueAnswersController');
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware');

router.get('/true_answers', controllerTrue.getTrueAnswers);
router.post('/true_answers', roleCheckMiddleware('ADMIN'), controllerTrue.addTrueAnswers);

router.get('/', controller.getTests);
router.post('/', roleCheckMiddleware('ADMIN'), controller.addTest);




module.exports = router;