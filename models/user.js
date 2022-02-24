'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const User = dbConnection.define('users', {
  
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
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  role:{
  type: DataTypes.STRING,
  allowNull:false,
  unique:true
}
  
}, {

  timestamps: true
});

  
module.exports = User