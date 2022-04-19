var express = require('express')
var mysql = require('mysql2')
var app = express()

var connection = mysql.createConnection({
  host: '192.168.0.117',
  user: 'user',
  password: 'pass',
  database: 'reactdb'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

  connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {
    if (err) throw err
    connection.query('INSERT INTO people (id, name, age, address) VALUES (?, ?, ?, ?)', ['01', 'Larry', '41', 'California, USA'], function(err, result) {
      if (err) throw err
      connection.query('SELECT * FROM people', function(err, results) {
        if (err) throw err
        console.log(results[0].id)
        console.log(results[0].name)
        console.log(results[0].age)
        console.log(results[0].address)
      })
    })
  })
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
