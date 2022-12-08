import { Router } from "express";
import {
  getAll,
  readByID,
  add,
  update,
  remove,
} from "../controllers/controllers.js";

export const movieRoutes = Router();

//list all data
movieRoutes.get("/all", getAll);
movieRoutes.get("/:id", readByID);
movieRoutes.put("/:id", update);
movieRoutes.delete("/:id", remove);
movieRoutes.post("", add);
