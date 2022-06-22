const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  Storage: "./db.sqlite",
});

const User = sequelize.define("User", {
  name: Sequelize.STRING, // varchar 255
});

module.exports = { Sequelize, sequelize, User };
