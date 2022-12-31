"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      allowNull: false,
      defaultValue: "Pending",
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  User.beforeCreate(async (user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  User.beforeUpdate(async (user) => {
    user.dataValues.updatedAt = moment().unix();
  });

  User.associate = (models) => {
    User.hasMany(models.Blogs, {
      foreignKey: "fk_user_id",
      as: "blogs",
    });
  };

  return User;
};
