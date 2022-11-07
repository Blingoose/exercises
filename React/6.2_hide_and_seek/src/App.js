import React from "react";

import "./App.css";

import BoxAndButton from "./components/BoxAndButton";

function App() {
  const [isShow, setShow] = React.useState(true);

  const clickHandle = () => {
    setShow(!isShow);
  };
  return (
    <div className="App">
      <BoxAndButton clickHandle={clickHandle} val={isShow} />
    </div>
  );
}

export default App;
