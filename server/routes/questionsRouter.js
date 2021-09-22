const Router = require('express');
const router = new Router;
const controller = require('../controllers/QuestionsController');
const controllerAnswers = require('../controllers/AnswersController');
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware');

router.get('/answers', controllerAnswers.getAnswers);
router.post('/answers', roleCheckMiddleware('ADMIN'), controllerAnswers.addAnswer);


router.get('/', controller.getQuestions);
router.post('/', roleCheckMiddleware('ADMIN'), controller.addQuestion);



module.exports = router;