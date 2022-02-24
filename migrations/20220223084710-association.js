"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //addcolumn("table name","foreign key")
    return await queryInterface
      .addColumn("applicants", "scholarshipId", {
        type: DataTypes.INTEGER,
        references: {
          model: "scholarships", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
      }).then(async () => {
        return await queryInterface.addColumn("applicants", "awardId", {
          type: DataTypes.INTEGER,
          references: {
            model: "awards", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      }).then(async () => {
        return await queryInterface.addColumn("beneficiaries", "scholarshipId", {
          type: DataTypes.INTEGER,
          references: {
            model: "scholarships", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      }).then(async () => {
        return await queryInterface.addColumn("beneficiaries", "awardId", {
          type: DataTypes.INTEGER,
          references: {
            model: "awards", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      })
    },
    down: async (queryInterface, Sequelize) => {
      return await queryInterface
        .removeColumn("applicants", "scholarshipId")
        .then(async () => {
          return await queryInterface.removeColumn("applicants", "awardId");
        })
        .then(async () => {
          return await queryInterface.removeColumn("beneficiaries", "scholarshipId");
        })
        .then(async () => {
          return await queryInterface.removeColumn("beneficiaries", "awardId");
        })
    },
  };