const Router = require('express');
const router = new Router;
const controller = require('../controllers/QuestionsController');
const controllerAnswers = require('../controllers/AnswersController');


router.get('/answers', controllerAnswers.getAnswers);
router.post('/answers', controllerAnswers.addAnswer);


router.get('/', controller.getQuestions);
router.post('/', controller.addQuestion);



module.exports = router;