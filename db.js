const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'postgres://ubkqvnls:sEZxHoV5HxS1eGJ6oxXGorQMEzaVFKDn@tai.db.elephantsql.com/ubkqvnls'
);

sequelize.authenticate().then(
  function success() {
    console.log('Connected to DB');
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);

module.exports = sequelize;
