import { useState } from "react";

export const useMathAction = (initialValue) => {
  const [math, setMath] = useState(initialValue);

  const doMath = (mathOperator, num) => {
    setMath((prev) =>
      mathOperator === "*" ? (
        prev + num
      ) : mathOperator === "-" ? (
        prev - num
      ) : mathOperator === "*" ? (
        prev * num
      ) : mathOperator === "/" ? (
        prev / num
      ) : (
        <h1>Wrong Operation</h1>
      )
    );
  };

  return { math, doMath };
};
