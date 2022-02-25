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
        allowNull: false,
      },
      religion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
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