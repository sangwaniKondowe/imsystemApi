'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applications', {
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
      regnum:{
        type:DataTypes.STRING,
        allowNull:false
      },
      yrofstudy:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender:{
        type:DataTypes.STRING,
        allowNull:false
      },
      gpa:{
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      bankname:{
        type: DataTypes.STRING,
        allowNull: true
      },
      accoutnum:{
        type: DataTypes.STRING,
        allowNull: true
      },
      status:{
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('applications');
  }
};