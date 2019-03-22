var express = require('express');
var mysql = require('mysql');
var app = express();

//view engine setup
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.set('views', 'views');
app.set('view engine', 'ejs'); // set up ejs for templating

// MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	user:'u0003_hilda',
	password:'/zZU;?<C6T)emJ~E',
	database:'hilda_project'
});

connection.connect(function(error){
	if(error){
		console.log('error');
	} else {
		console.log('connected');
	}
});

// routes ======================================================================
require('./config/routes.js')(app, connection); // load our routes and pass in our app and connection and fully configured passport 


app.listen(8090);
console.log('app running...');
console.log('listen on 8090');
console.log('http://vps659266.ovh.net:8090');
