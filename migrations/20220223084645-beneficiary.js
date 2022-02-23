'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('beneficiaries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
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
    await queryInterface.dropTable('beneficiaries');
  }
};