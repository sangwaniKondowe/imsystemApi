'use strict'
const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const Application = require("./application");
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

  Scholarship.hasMany(Application, {
    foreignKey:'scholarshipId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Application.belongsTo(Scholarship)


  Award.hasMany(Application, {
   foreignKey: 'awardId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Application.belongsTo(Award)

  Application.hasOne(Beneficiary, {
    foreignKey: 'applicationId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  
  Beneficiary.belongsTo(Application)

  Scholarship.hasMany(Beneficiary, {
    foreignKey: 'scholarshipId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  Beneficiary.belongsTo(Scholarship)

module.exports = Scholarship