"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const initDb_1 = require("../db/initDb");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const user = yield initDb_1.db.user.create({
            data: {
                name,
                email,
            },
        });
        return res.json({
            msg: "user created",
            user,
        });
    }
    catch (e) {
        console.log("error 1", e);
        next(e);
    }
});
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield initDb_1.db.user.findMany({
            include: {
                articles: true,
            },
        });
        return res.json({ msg: "sucess", users });
    }
    catch (e) {
        next(e);
    }
});
const userService = {
    create,
    getAll,
};
exports.userService = userService;
