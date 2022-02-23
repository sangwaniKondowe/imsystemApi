'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Beneficiary = dbConnection.define('beneficiaries', {
  
  // Model attributes are defined here

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
  }, {

    timestamps: true
  });

  
 
  module.exports = Beneficiary