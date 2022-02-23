'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('scholarships', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      nameOfScholarship: {
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
    await queryInterface.dropTable('scholarships');
  }
};