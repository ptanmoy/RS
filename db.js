var pool = require('./pool.js');

  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM RS_REQUIREMENTS', function(err, results){
      if(err) {
        throw err;
      } else {
         console.log(JSON.stringify(results));
      }
    });
    connection.release();
  });


//module.exports.getRequirements = getRequirements;

