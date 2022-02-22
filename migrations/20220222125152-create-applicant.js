'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applicants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      YrOfStudy: {
        type: Sequelize.INTEGER
      },
      program: {
        type: Sequelize.STRING
      },
      regNum: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      typeOfScholar: {
        type: Sequelize.STRING
      },
      accountNum: {
        type: Sequelize.INTEGER
      },
      bankName: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applicants');
  }
};