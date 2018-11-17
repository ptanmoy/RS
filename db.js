var pool = require('./pool.js');


let getREQResults = function(callback){
  pool.getConnection(function(err, connection){
    connection.query("SELECT * FROM RS_REQUIREMENTS WHERE REQUIREMENTS_STATUS='OPEN'", function(err, results){
      if(err) {
        return err;
      } else {
        connection.release();
        callback(results);
      }
    });
    
  }); 
}

module.exports.getREQResults = getREQResults;