var express = require('express');
require('dotenv').config();
var db = require('./db');

var app = express();
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');

app.use('/', (req, res) => {
  res.send('app is running');
});

app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    app.listen(PORT, function () {
      console.log(`App is listening on ${PORT}`);
    });

    await db.sync();
  } catch (error) {
    console.log(error);
  }
};

start();
