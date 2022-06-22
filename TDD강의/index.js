var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var user = require("./api/user");

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// users로 들어오는 경로에 대해서는 모두 user의 모듈이 담당한다!
app.use("/users", user);

module.exports = app;
