var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'rspoc.ccvsgw1o4brx.ap-south-1.rds.amazonaws.com',
  user: 'root',
  password: 'welcome1',
  database: 'myrspoc'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

      connection.query('SELECT * FROM RS_COMPANY', function(err, results) {
        if (err) throw err
        console.log(results[0].COMPANY_ID)
        console.log(results[0].COMPANY_NAME)
        console.log(results[0].CREATED_DATE)
        console.log(results[0].CREATED_BY)
      })
})

