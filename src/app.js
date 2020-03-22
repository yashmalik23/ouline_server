// import modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// implement app
const app = express();
const router = express.Router();

// import routes
const routes = require('./routes');

// middleware

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors enabled
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		res.sendStatus(200);
	} else {
		next();
	}
});

global.__basedir = __dirname;

app.use('/', routes(router));

module.exports = app;
