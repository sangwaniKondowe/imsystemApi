'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Applicant = require("../models/applicant");
const Award = require("./award");
const Beneficiary = require("./beneficiary");
const Scholarship = dbConnection.define('scholarships', {
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  finish_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  }, {
    timestamps: true
  });

  Scholarship.hasMany(Applicant, {
    foreignKey:'scholarshipId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Applicant.belongsTo(Scholarship)


  Award.hasMany(Applicant, {
   foreignKey: 'awardId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Applicant.belongsTo(Award)

  Award.hasMany(Beneficiary, {
    foreignKey: 'awardId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  
  Beneficiary.belongsTo(Award)

  Scholarship.hasMany(Beneficiary, {
    foreignKey: 'scholarshipId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Beneficiary.belongsTo(Scholarship)

module.exports = Scholarship