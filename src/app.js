const express = require('express');

const app = express();

const helmet = require('helmet')
const cors = require('cors');
const bodyParser = require('body-parser');

const API_URL = require('./config.js').api.url;

/* ##### MIDDLEWARES ##### */
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', (req, res, next) => {
  res.json({msg: 'pong'})
});

/* ##### ERROR MIDDLEWARE ##### */
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    //JWT
    res.status(401).json({status: 'error', msg: 'Invalid token...'});
  } else {
    res.json({status: 'error', msg: err.message});
  }
});

module.exports = app;
