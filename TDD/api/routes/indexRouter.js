import { Router } from "express";

export default (app) => {
  const indexRouter = Router();

  app.use("/", indexRouter);

  indexRouter.get("/", (req, res) => {
    res.status(200).json({ status: "succ" });
  });
};
