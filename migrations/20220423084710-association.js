"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
   //addcolumn("table name","foreign key")
    return await queryInterface
      .addColumn("applications", "userId", {
        type: DataTypes.INTEGER,
        references: {
          model: "users", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
      }).then(async () => {
        return await queryInterface.addColumn("beneficiaries", "userId", {
          type: DataTypes.INTEGER,
          references: {
            model: "users", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
        })
        .then(async () => {
            return await queryInterface.addColumn("user_roles", "userId", {
              type: DataTypes.INTEGER,
              references: {
                model: "users", // name of Target model
                key: "id", // key in Target model that we're referencing
              },
              onUpdate: "CASCADE",
              onDelete: "NO ACTION",
            });
          }).then(async () => {
            return await queryInterface.addColumn("user_roles", "roleId", {
              type: DataTypes.INTEGER,
              references: {
                model: "roles", // name of Target model
                key: "id", // key in Target model that we're referencing
              },
              onUpdate: "CASCADE",
              onDelete: "NO ACTION",
            });
         })
     },
    down: async (queryInterface, Sequelize) => {
       return await queryInterface
         .removeColumn("applications", "userId")
         .then(async () => {
           return await queryInterface.removeColumn("beneficiaries", "userId");
         })
         .then(async () => {
            return await queryInterface.removeColumn("user_roles", "userId");
          })
          .then(async () => {
            return await queryInterface.removeColumn("user_roles", "roleId");
          });
    },
};