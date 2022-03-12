'use strict'

const dbConnection = require("../dbConnection")
const DataTypes = require("sequelize");
const User = require("./user");
const Beneficiary = require("./beneficiary");
const User_role = require("./user_role");
const Role = require("./role");
const Application = dbConnection.define('applications', {

  // Model attributes are defined here
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
  status:{
    type: DataTypes.STRING,
    allowNull: true
  },
}, {

  timestamps: true
});

User.hasOne(Application, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Application.belongsTo(User)

Application.hasOne(Beneficiary, {
  foreignKey: 'applicationId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Beneficiary.belongsTo(Application)

User.hasMany(User_role, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
User_role.belongsTo(User)

Role.hasMany(User_role, {
  foreignKey: 'roleId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
User_role.belongsTo(Role)

module.exports = Application