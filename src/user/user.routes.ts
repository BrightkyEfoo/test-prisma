import { Router } from "express";
import { userService } from "./user.service";
import { validate } from "../middlewares/validate";
import { createUserSchema } from "./user.schema";

const userRouter = Router();

userRouter
  .route("/")
  .post(validate(createUserSchema), userService.create)
  .get(userService.getAll);

export { userRouter };
