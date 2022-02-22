'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Applicant.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false},
    YrOfStudy: {
      type: DataTypes.INTEGER,
      allowNull: false},
    program: {
      type: DataTypes.STRING,
      allowNull: false},
    regNum: {
      type: DataTypes.STRING,
      allowNull: false},
    description: {
      type: DataTypes.STRING,
      allowNull: false},
    nameOfScholar: {
      type: DataTypes.STRING,
      allowNull: false},
    accountNum: {
      type: DataTypes.INTEGER,
      allowNull: false},
    bankName: {
      type: DataTypes.STRING,
      allowNull: false},
    religion: {
      type: DataTypes.STRING,
      allowNull: false},
  }, {
    sequelize,
    tableName: 'applicants',
    modelName: 'Applicant',
  });
  return Applicant;
};