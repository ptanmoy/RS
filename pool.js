var mysql = require('mysql')

var pool =  mysql.createPool({
        host: 'rspoc.ccvsgw1o4brx.ap-south-1.rds.amazonaws.com',
        user: 'root',
        password: 'welcome1',
        database: 'myrspoc'
    });

module.exports = pool;    