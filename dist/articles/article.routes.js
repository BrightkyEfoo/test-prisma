"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArticleSchema = void 0;
const zod_1 = require("zod");
const createArticleSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        title: (0, zod_1.string)().min(1),
        content: (0, zod_1.string)(),
        authorId: (0, zod_1.number)(),
    }),
});
exports.createArticleSchema = createArticleSchema;
