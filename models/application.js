'use strict'

const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const User = require("./user");
const Beneficiary = require("./beneficiary");
const Application = dbConnection.define('applications', {

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
  regNum:{
    type:DataTypes.STRING,
    allowNull:false
  },
  yrOfStudy:{
    type: DataTypes.INTEGER,
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
  bankName:{
    type: DataTypes.STRING,
    allowNull: true
  },
  accountNum:{
    type: DataTypes.STRING,
    allowNull: true
  },
  status:{
    type: DataTypes.STRING,
    allowNull: true
  },
}, {

  timestamps: true
});

User.hasOne(Application, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Application.belongsTo(User)

Application.hasOne(Beneficiary, {
  foreignKey: 'applicationId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Beneficiary.belongsTo(Application)

module.exports = Application