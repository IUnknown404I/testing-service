const Router = require('express');
const router = new Router;
const controller = require('../controllers/testController');


router.get('/', );
router.get('/:id', );
router.post('/', );

router.get('/true_answers', );
router.get('/true_answers/:id', );
router.post('/true_answers', );

router.get('/questions', );
router.get('/questions:id', );
router.post('/questions', );

router.get('/questions/answers', );
router.get('/questions/answers:id', );
router.post('/questions/answers', );


module.exports = router;