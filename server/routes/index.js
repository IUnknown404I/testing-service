const Router = require('express');
const router = new Router;
const CheckResultsController = require('../controllers/CheckResultsController');


const userRouter = require('./userRouter');
const testRouter = require('./testRouter');
const questionsRouter = require('./questionsRouter');

router.use('/user', userRouter);
router.use('/test', testRouter);
router.use('/question', questionsRouter);
router.post('/check-results', CheckResultsController.checkResults);


module.exports = router;