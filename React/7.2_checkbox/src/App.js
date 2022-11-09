import Checkbox from "./Checkbox";

function App() {
  const arr = Array.from(Array(4), (_, index) => index + 1);

  return (
    <div>
      {arr.map((input) => (
        <Checkbox checked={input > arr.length / 2} />
      ))}
    </div>
  );
}

export default App;
