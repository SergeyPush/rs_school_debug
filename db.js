const Sequelize = require('sequelize');
require('dotenv').config();
//database username   password
// const sequelize = new Sequelize(
//   process.env.DB,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//   }
// );

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
