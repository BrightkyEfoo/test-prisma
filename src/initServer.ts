import express from "express";
import { config } from "dotenv";
import { errorHandler } from "./middlewares/error";
import { userRouter } from "./user/user.routes";
import morgan from "morgan";
config();

const initApp = () => {
  const app = express();

  app.use(express.json()).use(morgan("dev"));

  // config routes

  app.use("/api/v1/users", userRouter);

  // end routing

  app.use(errorHandler);

  return app;
};

export { initApp };
