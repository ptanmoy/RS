var express = require('express');
var router = express.Router();
 //var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Respond with a resource...Tanmoy!');
});

/* GET users listing. */
router.get('/users/:userId', function(req, res, next) {
  var userID = req.params.userId;
  res.send('Respond with a resource...Tanmoy! - '+userID);
});


module.exports = router;
