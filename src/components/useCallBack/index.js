import react, { useCallback } from "react";
import { useState } from "react";

const Button = react.memo(({ incrementButton }) => {
  return <button onClick={() => incrementButton(1)}>+</button>;
});

function App() {
  const [counter, setCounter] = useState(0);

  const incrementeCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <p>teste</p>
      <h1>C1: {counter} </h1>
      <Button incrementButton={incrementeCounter} />
    </div>
  );
}
