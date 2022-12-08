import { Router } from "express";
import { movieRoutes } from "./movie.routes.js";

export const router = Router();

router.use("/movies", movieRoutes);
