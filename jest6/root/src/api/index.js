import express from "express";

import userRouter from "./routes/userRouter";

export default () => {
  const app = express();

  userRouter(app);

  return app;
};
