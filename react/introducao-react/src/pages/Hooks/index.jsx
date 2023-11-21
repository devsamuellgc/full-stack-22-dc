import { useState } from "react";

export default function Hooks() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter((prev) => prev + 1);
  }

  function handleZero() {
    setCounter(0);
  }

  function handleDecrease() {
    setCounter((prev) => prev - 1);
  }

  return (
    <>
      <div>
        <h2>useState</h2>
        <div className="flex gap-2 items-center">
          <button className="text-xl" onClick={handleDecrease}>
            -
          </button>
          <p className="text-xl">{counter}</p>
          <button className="text-xl" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button onClick={handleZero}>Zerar contador</button>
      </div>
    </>
  );
}
