const express = require('express');
const noteRoutes = require('./routes/index');
const { getHompage } = require('./controller/index');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('note');
});

app.use('/notes', noteRoutes);

module.exports = app;
