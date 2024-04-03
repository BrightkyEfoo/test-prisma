"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initServer_1 = require("./initServer");
const app = (0, initServer_1.initApp)();
app.listen(process.env.PORT, () => {
    console.log("Notre serveur tourne sur le port " + process.env.PORT);
});
// freeUp(app);
