// db를 sync하는 파일
import models from "../db/models/User.js";

export default () => {
  return models.sequelize.sync({ force: true }); // db를 날려버리고 다시 만듦
};
