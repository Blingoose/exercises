import React from "react";

import Button from "./Button";

import "./App.css";

function App() {
  const btnStyleObj = {
    btnImportant: { bold: "bold", text: "Important" },
    btn: { normal: "normal", text: "Not Important" },
  };
  const { bold, text: text1 } = btnStyleObj.btnImportant;
  const { normal, text: text2 } = btnStyleObj.btn;
  return (
    <div className="main">
      <Button btnStyle={bold} value={text1} />

      <Button btnStyle={normal} value={text2} />
    </div>
  );
}

export default App;
