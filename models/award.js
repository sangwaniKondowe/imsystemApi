'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const Award = dbConnection.define('awards', {


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
  name: {
      type: DataTypes.STRING},
  }, {

    timestamps: true
  });


  
    
  module.exports = Award