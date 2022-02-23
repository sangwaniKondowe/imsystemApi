'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize")
const Award = dbConnection.define('awards', {


  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    primaryKey: true
  },
    name: {
      type: DataTypes.STRING},
  }, {

    timestamps: true
  });


  
    
  module.exports = Award