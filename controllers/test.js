var Test = require('../models/testmodel');

// Display list of all Authors.
exports.test_controller_func = function(req, res) {
    var ID = req.params.uid;
    var BID = req.params.bid;
    res.send('ID and Book_ID repectively '+ID+' - '+BID);
};
