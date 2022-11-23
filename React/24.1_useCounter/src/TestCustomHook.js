import React from "react";
import { useMathAction1 } from "./hooks/useMathAction";

const TestCustomHook = () => {
  const { doMath, math } = useMathAction1(10);
  return (
    <div>
      <button onClick={() => doMath("+", 1)}>"Increase"</button>
      <span>{math}</span>
      <button onClick={() => doMath("-", 1)}>"Decrease</button>
    </div>
  );
};

export default TestCustomHook;
