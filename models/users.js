"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    full_name: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    createdAt: DataTypes.INTEGER,
    updatedAt: DataTypes.INTEGER,
  });

  User.beforeCreate(async (i) => {
    i.dataValues.createdAt = moment().unix();
    i.dataValues.updatedAt = moment().unix();
  });
  User.beforeUpdate(async (i) => {
    i.dataValues.updatedAt = moment().unix();
  });

  return User;
};
