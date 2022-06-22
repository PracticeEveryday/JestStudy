import { Router } from "express";
import indexRouter from "./routes/indexRouter.js";
import userRouter from "./routes/userRouter.js";

export default () => {
  const app = Router();

  indexRouter(app);
  userRouter(app);

  return app;
};
