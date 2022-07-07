import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

const User = sequelize.define("User", {
  name: Sequelize.STRING, // varchar 255 생성됨.
});

export default { User, Sequelize, sequelize };
