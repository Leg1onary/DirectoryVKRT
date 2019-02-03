var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : '88.212.237.4',
  user     : 'bemusico_admvkrt',
  password : 'Mkzsqa12`',
  database : 'bemusico_dirvkrt'
});


connection.connect(function() {
  console.log("Database connected");
});

str = connection.query('Select * from vkrt_users');
console.log(str);
