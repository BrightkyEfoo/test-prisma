import { Express } from "express";
import { db } from "./db/initDb";
const freeUp = (app: Express) => {
  app.on("SIGTERM", freeRessources);
  app.on("SIGKILL", freeRessources);
};

const freeRessources = async () => {
  await db.$disconnect();
  console.log("free up ressource");
  process.exit(0);
};

export { freeUp };
