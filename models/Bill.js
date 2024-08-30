const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bill = sequelize.define('Bill', {
    billNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customerDetails: {
        type: DataTypes.TEXT,
    },
    products: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Bill;
