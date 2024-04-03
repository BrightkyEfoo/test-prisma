"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../errors/AppError");
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof AppError_1.AppError) {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || "error";
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    else {
        return res.status(500).json({
            msg: "quelque chose a ml tourne",
            cause: `${err.name}: ${err.message}`,
        });
    }
};
exports.errorHandler = errorHandler;
