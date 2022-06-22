import mongoose from "mongoose";

import config from "../config/index.js";

import { User } from "./schemas/User.js";

mongoose
  .connect(config.MONGO_URL)
  .then(() => console.log(`${config.MONGO_URL}연결 성공`))
  .catch(() => console.log("몽고디비 연결 실패"));

export { User };
