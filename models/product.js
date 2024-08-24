'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      price: {
          type: DataTypes.FLOAT,
          allowNull: false
      },
      stock: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
  });
  return Product;
};
