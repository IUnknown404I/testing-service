const Router = require('express');
const router = new Router;
const controller = require('../controllers/TestController');
const controllerTrue = require('../controllers/TrueAnswersController');

router.get('/true_answers', controllerTrue.getTrueAnswers);
router.post('/true_answers', controllerTrue.addTrueAnswers);

router.get('/', controller.getTests);
router.post('/', controller.addTest);




module.exports = router;