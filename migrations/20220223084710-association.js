"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //addcolumn("table name","foreign key")
    return await queryInterface
      .addColumn("applications", "scholarshipId", {
        type: DataTypes.INTEGER,
        references: {
          model: "scholarships", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
      }).then(async () => {
        return await queryInterface.addColumn("applications", "awardId", {
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
        return await queryInterface.addColumn("beneficiaries", "applicationId", {
          type: DataTypes.INTEGER,
          references: {
            model: "applications", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      })
    },
    down: async (queryInterface, Sequelize) => {
       return await queryInterface
         .removeColumn("applications", "scholarshipId")
         .then(async () => {
           return await queryInterface.removeColumn("applications", "awardId");
         })
         .then(async () => {
           return await queryInterface.removeColumn("beneficiaries", "scholarshipId");
         })
         .then(async () => {
           return await queryInterface.removeColumn("beneficiaries", "applicationId");
         })
    },
  };