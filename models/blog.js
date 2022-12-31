"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blogs", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

  Blog.beforeCreate(async (blog) => {
    blog.dataValues.createdAt = moment().unix();
    blog.dataValues.updatedAt = moment().unix();
  });
  Blog.beforeUpdate(async (blog) => {
    blog.dataValues.updatedAt = moment().unix();
  });

  Blog.associate = (models) => {
    Blog.belongsTo(models.Users, {
      foreignKey: "fk_user_id",
      as: "user",
    });
  };

  return Blog;
};
