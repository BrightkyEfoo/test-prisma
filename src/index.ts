import { initApp } from "./initServer";

const app = initApp();
app.listen(process.env.PORT, () => {
  console.log("Notre serveur tourne sur le port " + process.env.PORT);
});

// freeUp(app);
