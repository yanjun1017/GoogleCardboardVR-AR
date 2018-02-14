const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config/db.js')

console.log('hello from server.js')

var url = '';
var dbName = 'rpivrar';
// connect to database here

var app = express();

app.use(cors()); // not sure if I'm keeping this yet

app.get('/', function(req, res) {
	res.send('hello');
})

app.get('/about', function(req, res) {
	res.send('about');
})

app.get('/contact', function(req, res)) {
	res.send('send us your stuff');
}

const server = app.listen(3000, function() {
	console.log('listening on port ' + port);
});