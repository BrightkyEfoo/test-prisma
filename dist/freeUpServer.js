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
exports.freeUp = void 0;
const initDb_1 = require("./db/initDb");
const freeUp = (app) => {
    app.on("SIGTERM", freeRessources);
    app.on("SIGKILL", freeRessources);
};
exports.freeUp = freeUp;
const freeRessources = () => __awaiter(void 0, void 0, void 0, function* () {
    yield initDb_1.db.$disconnect();
    console.log("free up ressource");
    process.exit(0);
});
