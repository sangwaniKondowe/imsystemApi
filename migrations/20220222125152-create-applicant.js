'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('applicants', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
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
    await queryInterface.dropTable('applicants');
  }
};