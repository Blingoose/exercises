import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const jsonDirPath = path.join(__dirname, "./db");
const dataPath = `${jsonDirPath}/movies.json`;

export const loadData = () => {
  const dataJSON = fs.readFileSync(dataPath);
  return JSON.parse(dataJSON);
};

const saveData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

export const findMovie = (id) => {
  const movies = loadData();
  return movies.find((movie) => movie.id === id);
};

export const updateMovie = (data, movie, id) => {
  const movies = loadData();
  if (duplicatedMovie(data, movies)) {
    return "duplication";
  } else {
    const foundIndex = movies.findIndex((movie) => movie.id === id);
    movies[foundIndex] = { ...movie, ...data };
    saveData(movies);
    return movies[foundIndex];
  }
};

export const addMovie = (data) => {
  if (postValidator(data)) {
    console.log(postValidator(data));
    const movies = loadData();
    if (!duplicatedMovie(data, movies)) {
      const movie = { ...data, id: uuidv4() };
      movies.push(movie);
      saveData(movies);
      return movie;
    } else {
      return false;
    }
  } else {
    return "Failed postValidator";
  }
};

export const removeMovie = (id) => {
  const movies = loadData();
  const keptMovies = movies.filter((movie) => movie.id !== id);
  saveData(keptMovies);
};

const duplicatedMovie = (data, movies) => {
  return movies.find((movie) => movie.title === data.title);
};

const postValidator = (data) => {
  const arr = Object.keys(data);
  const validKeyNames = ["title", "image", "rating", "releaseYear", "genre"];
  if (
    arr.every((e) => validKeyNames.includes(e)) &&
    arr.length === validKeyNames.length &&
    data.title.length > 0
  ) {
    return true;
  } else {
    return false;
  }
};
