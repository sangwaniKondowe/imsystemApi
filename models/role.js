'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const Role = dbConnection.define('roles', {
  
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  role_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
}, {

  timestamps: true
});

  
module.exports = Role