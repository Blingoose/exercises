import { fileURLToPath } from "url";
import path from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();

const publicDirPath = path.join(__dirname, "../src/public");
app.use(express.static(publicDirPath));

app.get("/help", (req, res) => {
  res.send("Help Page!");
});

app.get("/about", (req, res) => {
  res.send("About Page!");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
