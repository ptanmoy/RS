var pool = require('./pool.js');

exports.getRequirements = funtion() 
  var retJSON;
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM RS_REQUIREMENTS', function(err, results){
      if(err) {
        throw err;
      } else {
         retJSON = JSON.stringify(results);
      }
    });
    connection.release();
    return retJSON;
  });


//module.exports.getRequirements = getRequirements;

