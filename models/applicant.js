'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Applicant = dbConnection.define('applicants', {
  
  // Model attributes are defined here

id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    YrOfStudy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    program: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameOfScholar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bankName: {
      type: DataTypes.STRING,
      allowNull: false},
    religion: {
      type: DataTypes.STRING,
      allowNull: false},
  }, {

    timestamps: true
  });

  
 
  module.exports = Applicant