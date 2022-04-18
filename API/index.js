var express = require('express')
const mysql = require("mysql")
var app = express()

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "pass",
  database: process.env.MYSQL_DATABASE || "mydb",
})

app.get('/', function (req, res) {
  res.send('Hello World! A new change is made. Change added')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
