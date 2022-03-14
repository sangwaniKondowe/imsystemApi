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
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regnum:{
    type:DataTypes.STRING,
    allowNull: true,
  },
  yrofstudy:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender:{
    type:DataTypes.STRING,
    allowNull:false
  },
  gpa:{
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  
}, {

  timestamps: true
});

  
module.exports = User