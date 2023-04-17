const express = require('express');
const noteRoutes = require('./routes/index');
const { getHomepage } = require('./controller/index');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', getHomepage);
app.use('/notes', noteRoutes);

module.exports = app;
