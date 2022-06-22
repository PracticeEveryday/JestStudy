import { Router } from "express";
import { UserService } from "../../services/userService.js";

export default (app) => {
  const userService = new UserService();
  const userRouter = Router();
  app.use("/user", userRouter);

  userRouter.get("/", async (req, res, next) => {
    try {
      const users = await userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  });
};
