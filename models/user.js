'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const User = dbConnection.define('users', {
  
  // Model attributes are defined here

id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  } ,
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  bio:{
  type: DataTypes.STRING,
  allowNull:false,
  unique:true
}
  
}, {

  timestamps: true
});

  
module.exports = User