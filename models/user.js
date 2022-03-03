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
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regNum:{
    type:DataTypes.STRING,
    allowNull:false
  },
  yrOfStudy:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Gender:{
    type:DataTypes.STRING,
    allowNull:false
  },
  GPA:{
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  
}, {

  timestamps: true
});

  
module.exports = User