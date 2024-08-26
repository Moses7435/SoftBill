// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SoftBill', 'root', 'Baefresh@10', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
 