var express = require('express')
var mysql = require('mysql2')
var app = express()

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'pass',
  database: 'reactdb'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
