const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectId
var db = require('./db')
var artistsController = require('./controllesrs/artists')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Hello API')
})

app.get('/artists', artistsController.all)

app.get('/artists/:id', artistsController.findById)

app.post('/artists', artistsController.create)

app.put('/artists/:id', artistsController.update)


app.delete('/artists/:id', artistsController.delete)

db.connect('mongodb://localhost:27017/myapi', function (err) {
  if (err) {
    return console.log(err)
  }

  app.listen(3012, function () {
    console.log("API started")
  })
})
