import { React, useEffect, useState } from "react";
import "./Box.css";

// function Box() {
//   const [showBox, setShowBox] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setShowBox('slideIn');
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <div showBox={showBox} className="myBox slide"></div>
//     </div>
//   );
// }

// export default Box;

function Box() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setTime(() => 1), 1000);
    setTimeout(() => setTime(() => 0), 5000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      <div>
        <div className={time && "box"}></div>
      </div>
    </>
  );
}

export default Box;
