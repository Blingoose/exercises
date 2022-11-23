import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import axios from "axios";

function App() {
  const [getJoke, setJoke] = useState(null);
  const [err, setError] = useState("");

  const { data, isLoading, error } = useFetch(
    "https://api.chucknorris.io/jokes/categories"
  );

  const handleJoke = async ({ target }) => {
    try {
      const {
        data: { value },
      } = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${target.textContent}`
      );

      setJoke(value);
    } catch (err) {
      setError(() => err);
    }
  };

  return (
    <div className="App">
      {isLoading && <h3>Loading</h3>}

      {data &&
        data.map((category, i) => (
          <button onClick={handleJoke} key={i}>
            {category}
          </button>
        ))}
      {error && <p>{error.message}</p>}
      {err ? err && <p>{err.message}</p> : <h1>{getJoke}</h1>}
    </div>
  );
}

export default App;
