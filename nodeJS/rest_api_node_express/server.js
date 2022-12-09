import fs from "fs/promises";
import express from "express";
import _ from "lodash";
import cors from "cors";
import { v4 as uuid } from "uuid";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/outfit", (req, res) => {
  const tops = ["Black", "White", "Orange", "Navy"];
  const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
  const shoes = ["White", "Grey", "Black"];

  res.send({
    tops: _.sample(tops), //lodash random sample from an array
    jeans: _.sample(jeans),
    shoes: _.sample(shoes),
  });
});

server.get("/comments/:id", async (req, res) => {
  const { id } = req.params;
  let content;
  try {
    content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
    res.status(200).send({ content: content });
  } catch (error) {
    res.status(400).send("Error occured");
  }
});

server.post("/comments", async (req, res) => {
  const id = uuid();
  console.log(id);
  const content = req.body.content;
  console.log(content);
  if (!content) {
    return res.status(400).send("Error!");
  }
  await fs.mkdir("data/comments", { recursive: true });
  await fs.writeFile(`data/comments/${id}.txt`, content, "utf-8");
  res.status(201).send(``);
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
