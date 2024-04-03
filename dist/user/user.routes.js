"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const validate_1 = require("../middlewares/validate");
const user_schema_1 = require("./user.schema");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter
    .route("/")
    .post((0, validate_1.validate)(user_schema_1.createUserSchema), user_service_1.userService.create)
    .get(user_service_1.userService.getAll);
