'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const User_role = dbConnection.define('user_roles', {
  
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
  } 
}, {

  timestamps: true
});

  
module.exports = User_role