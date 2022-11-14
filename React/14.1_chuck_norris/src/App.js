import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// https://api.chucknorris.io/

function App() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);

  async function generateJoke() {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    // console.log(data);
    setJoke(data.value);
  }

  useEffect(() => {
    async function getCategories() {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      console.log(data);
      setCategories(data);
    }
    getCategories();
  }, []);

  async function getJokeByCategory(e) {
    const category = e.currentTarget.getAttribute("category");
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );

    setJoke(data.value);
  }

  return (
    <div className="App">
      <ul>
        {categories.map((category, i) => (
          <button
            onClick={getJokeByCategory}
            key={i + category}
            category={category}
          >
            {category}
          </button>
        ))}
      </ul>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get Joke</button>
    </div>
  );
}

export default App;
