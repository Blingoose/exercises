import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(false);
  // const num = Math.floor(Math.random() * 3 + 1);

  useEffect(() => {
    setTime(true);
    setTimeout(() => {
      setTime(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <div className={time ? "spinner-1" : ""}></div>
      </div>
    </>
  );
}

export default App;
