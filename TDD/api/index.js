import { Router } from "express";
import indexRouter from "./routes/indexRouter.js";

export default () => {
  const app = Router();

  indexRouter(app);

  return app;
};
