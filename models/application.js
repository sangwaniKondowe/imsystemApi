'use strict'

const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Application = dbConnection.define('applications', {

  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    allowNull: false
  },
  religion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {

  timestamps: true
});



module.exports = Application