"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
const createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)().min(1).optional(),
        email: (0, zod_1.string)().email(),
    }),
});
exports.createUserSchema = createUserSchema;
