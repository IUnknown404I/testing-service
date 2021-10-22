const Router = require('express');
const router = new Router;
const controllerResults = require('../controllers/CheckResultsController');
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware');

router.post('/addValid', roleCheckMiddleware('ADMIN'), controllerResults.addValidAns);
router.post('/', controllerResults.checkResults);


module.exports = router;