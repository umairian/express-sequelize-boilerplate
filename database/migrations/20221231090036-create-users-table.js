"use strict";

const moment = require("moment");
const bcrypt = require("bcryptjs");

const table = "users";

const user = {
  name: "Umair Syed",
  email: "itsumairsyed@gmail.com",
  password: bcrypt.hashSync("admin123", bcrypt.genSaltSync(12)),
  createdAt: moment().unix(),
  updatedAt: moment().unix(),
};

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Pending", "Approved", "Rejected"),
        allowNull: false,
        defaultValue: "Pending",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.bulkInsert(table, [user]);
  },
  down: async function (queryInterface) {
    await queryInterface.dropTable(table);
  },
};
