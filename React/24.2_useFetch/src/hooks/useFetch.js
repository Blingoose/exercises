import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(url)
      .then((res) => {
        setData(() => res.data);
      })
      .catch((err) => {
        setError(() => err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [url]);

  useEffect(() => {}, [data]);

  return { data, isLoading, error };
};

export default useFetch;

// https://api.chucknorris.io/jokes/random

// Create a custom hook that fetches data.
// The hook gets a Url as an argument and should return: data: initial to null
// isLoading: initial false
// Error: initial null
