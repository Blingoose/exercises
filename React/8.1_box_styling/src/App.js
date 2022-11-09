import React from "react";
import styled from "styled-components";

//* -------------  using styled-components styling ------------

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Box2 = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Box3 = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  background-color: green;
`;

const Box4 = styled.div`
  height: 45%;
  width: 90%;
  background-color: purple;
`;

function App() {
  return (
    <Main>
      <Box>
        <Box2>
          <Box3>
            <Box4 />
            <Box4 />
          </Box3>
        </Box2>
      </Box>
    </Main>
  );
}

//* -------------  using inline styling ------------

// function App() {
//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box>
//         <Box2>
//           <Box3>
//             <Box4 />
//             <Box4 />
//           </Box3>
//         </Box2>
//       </Box>
//     </div>
//   );
// }

// function Box(props) {
//   return (
//     <div
//       style={{
//         width: "90%",
//         height: "90%",
//         backgroundColor: "red",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {props.children}
//     </div>
//   );
// }

// function Box2(props) {
//   return (
//     <div
//       style={{
//         width: "80%",
//         height: "80%",
//         backgroundColor: "blue",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {props.children}
//     </div>
//   );
// }

// function Box3(props) {
//   return (
//     <div
//       style={{
//         height: "80%",
//         width: "80%",
//         backgroundColor: "pink",
//         display: "flex",
//         flexFlow: "column",
//         alignItems: "center",
//         justifyContent: "space-around",
//       }}
//     >
//       {props.children}
//     </div>
//   );
// }

// function Box4() {
//   return (
//     <div
//       style={{
//         height: "45%",
//         width: "90%",
//         backgroundColor: "green",
//       }}
//     ></div>
//   );
// }

export default App;
