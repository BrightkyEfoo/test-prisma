"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const error_1 = require("./middlewares/error");
const user_routes_1 = require("./user/user.routes");
const morgan_1 = __importDefault(require("morgan"));
(0, dotenv_1.config)();
const initApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json()).use((0, morgan_1.default)("dev"));
    // config routes
    app.use("/api/v1/users", user_routes_1.userRouter);
    // end routing
    app.use(error_1.errorHandler);
    return app;
};
exports.initApp = initApp;
