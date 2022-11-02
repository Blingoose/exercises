import "./App.css";

function App() {
  const data = ["hello", "world"];
  const str = data.map((e) => {
    return e[0].toUpperCase() + e.substring(1, e.length);
  });
  const number1 = 5;
  const number2 = 6;
  const sum = number1 + number2;

  const string = "I Love React!";
  return (
    <div className="App">
      <div>{`${str.join(" ")}`}</div>
      <div>{`${number1} + ${number2} = ${sum}`}</div>
      <div>{`The string's length is ${string.length}`}</div>
    </div>
  );
}

export default App;
