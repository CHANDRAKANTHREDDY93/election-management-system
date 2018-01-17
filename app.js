const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

var app = express();

const route = require('./routes/route');
const tasks = require('./routes/index');
const port = 3000;

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/'));

app.use('/api', route);

//testing server


app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin : *");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
app.listen(port, ()=>{
	console.log("Server started on port" +port)
})
app.get('/', function(req, res) {
	res.sendFile(__dirname + './election management system/client/src/app/index.html');
});
