var Test = require('../models/testmodel');
var dbjs = require('../db.js');


// Display list of all requirements.
exports.test_controller_func = function(req, res) {
    dbjs.getREQResults(function(results){
        console.log("IN Controller = "+JSON.stringify(results));
        res.send('ID and Book_ID repectively:'+ID+' - - '+BID+'  ----::::: '+JSON.stringify(results));
    });
    var ID = req.params.uid;
    var BID = req.params.bid;  
};


