const models = require("./models");
// db가 있더라도 날려버리고 다시 만든다는 의미

models.sequlize.sync({ force: true });
