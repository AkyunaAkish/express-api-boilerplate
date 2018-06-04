const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// REST API Route files
// (endpoints is a generic name, more specific
// names should be used in production to label 
// to type of resource these routes represent)
const endpoints = require('./components/endpoints/endpoints');

// init express 
const app = express();

// express middleware
// ------------------

// cors middleware to allow cross origin requests
app.use(cors());

// logging api activity to the command line
app.use(logger('dev'));

// parsing request body objects to json format
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

// API Endpoints:
app.use('/api/endpoints', endpoints);

module.exports = app;