var express = require('express');
var router = express.Router();

// Require controller modules.
var test_controller = require('../controllers/test');


/// TEST ROUTES ///
//router.get('/', test_controller.index);
router.get('/', function(req, res, next) {
    res.send('TEST with a resource...Tanmoy!');
});

router.get('/:uid/book/:bid', test_controller.test_controller_func);

module.exports = router;