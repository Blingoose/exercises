import {
  loadData,
  findMovie,
  addMovie,
  updateMovie,
  removeMovie,
} from "../utils.js";

export const getAll = (req, res) => {
  try {
    const data = loadData();
    res.status(200).send(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw "File not found!";
    } else {
      throw err;
    }
  }
};

export const readByID = (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  if (!movie) {
    res.status(404).send("No movie with the specified id");
  } else {
    res.status(200).send(movie);
  }
};

export const add = (req, res) => {
  const movie = addMovie(req.body);
  if (movie === "Failed postValidator") {
    res
      .status(404)
      .send(
        "Error: All fields must be filled.\nNOTICE: Do NOT include id, they are genereted by the server."
      );
  } else {
    if (!movie) {
      res.status(404).send("Error: Title already exist");
    } else {
      res.status(201).send(movie);
    }
  }
};

export const update = (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  if (!movie) {
    res.status(404).send("No movie with the specified id");
  } else {
    const updatedMovie = updateMovie(req.body, movie, id);
    if (updatedMovie === "duplication") {
      res.status(404).send("Error: Title already exist");
    } else {
      res.status(201).send(updatedMovie);
    }
  }
};

export const remove = (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  if (!movie) {
    res.status(404).send("No movie with the specified id");
  } else {
    removeMovie(id);
    res.status(200).send(movie);
  }
};
