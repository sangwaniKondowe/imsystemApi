'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Applicant = require("../models/applicant");
const Award = require("./award");
const Beneficiary = require("./beneficiary");
const Scholarship = dbConnection.define('scholarships', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    primaryKey: true
  },
    nameOfScholarship: {
      type: DataTypes.STRING,
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