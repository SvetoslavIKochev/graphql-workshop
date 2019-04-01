module.exports = {
  "development": {
    // "username": 'graphql',
    // "password": 'graphql',
    // "database": 'workshop',
    // "host": 'localhost',
    "url": process.env.DATABSE_CONNECTION_URI,
    "dialect": "postgres",
    "seederStorage": "sequelize",
  }
}
