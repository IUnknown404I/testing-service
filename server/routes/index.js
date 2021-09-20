const Router = require('express');
const router = new Router;


const userRouter = require('./userRouter');
const testRouter = require('./testRouter');
// const questionsRouter = require('./questionsRouter');

router.use('/user', userRouter);
router.use('/test', testRouter);
// router.use('/questions', );


module.exports = router;