import express from "express";
import { router } from "./src/routes/Route.js";

const server = express();
const PORT = "8000";
const host = "localhost";

server.use(express.json());
server.use("/api", router);

server.listen(PORT, host, () => {
  console.log(`Server is up on http://${host}:${PORT}`);
});
