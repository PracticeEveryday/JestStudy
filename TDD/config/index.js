import dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error(".env file이 없습니다.");
}

export default {
  PORT: process.env.PORT,

  MONGO_URL: process.env.MONGO_URL,
};
