import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    return res.status(500).json({
      msg: "quelque chose a ml tourne",
      cause: `${err.name}: ${err.message}`,
    });
  }
};

export { errorHandler };
