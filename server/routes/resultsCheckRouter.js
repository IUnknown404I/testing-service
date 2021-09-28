const Router = require('express');
const router = new Router;
const controllerResults = require('../controllers/CheckResultsController');
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware');

router.post('/', controllerResults.checkResults);
router.post('/addValid', roleCheckMiddleware, controllerResults.addValidAns);


module.exports = router;