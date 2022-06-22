import { Router } from "express";

export default (app) => {
  const userRouter = Router();
  app.use("/user", userRouter);

  userRouter.get("/", (req, res) => {
    res.status(200).json([{ name: "kim" }]);
  });
};
