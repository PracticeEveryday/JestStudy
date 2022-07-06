import { Router } from "express";
import { UserService } from "../../services/userService";

export default (app) => {
  const userRouter = Router();

  const userService = new UserService();

  app.use("/users", userRouter);

  userRouter.get("/", userService.finds);

  // get users/:id 라우터 추가!
  userRouter.get("/:id", userService.findOne);

  userRouter.delete("/:id", userService.deleteUser);

  userRouter.post("/", userService.addUser);
};
