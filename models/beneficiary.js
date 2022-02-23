'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Beneficiary = dbConnection.define('beneficiaries', {
  
  // Model attributes are defined here

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
  }, {

    timestamps: true
  });

  
 
  module.exports = Beneficiary