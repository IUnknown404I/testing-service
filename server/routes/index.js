const Router = require('express');
const router = new Router;


const userRouter = require('./userRouter');
const testRouter = require('./testRouter');
const questionsRouter = require('./questionsRouter');
const resultsRouter = require('./resultsCheckRouter');

router.use('/user', userRouter);
router.use('/test', testRouter);
router.use('/question', questionsRouter);
router.use('/check-results', resultsRouter);


module.exports = router;