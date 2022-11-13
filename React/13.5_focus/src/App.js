import { useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <form>
        <input
          type={"text"}
          ref={inputRef}
          placeholder="This one has focus"
        ></input>
        <input type={"text"} placeholder="No focus for that one"></input>
      </form>
    </div>
  );
};
export default App;
