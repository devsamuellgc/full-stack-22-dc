import { useState } from "react";
import { Inputs } from "../../components/ReactHooks/useState/inputs";

export default function Hooks() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  function handleIncrease() {
    setCounter((prev) => prev + 1);
  }

  function handleIncrease10() {
    setCounter((prev) => prev + 10);
  }

  function handleZero() {
    setCounter(0);
  }

  function handleDecrease() {
    setCounter((prev) => prev - 1);
  }

  function handleDecrease10() {
    setCounter((prev) => prev - 10);
  }

  function handleAmount() {
    setCounter((prev) => prev + parseFloat(amount));
  }

  return (
    <>
      <div>
        <h2>useState</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handleAmount}
            className="px-2 py-1 border bg-sky-800 rounded text-white"
          >
            Enviar
          </button>
        </div>
        <div>
          <button onClick={handleDecrease10}>- 10</button>
          <button onClick={handleIncrease10}>+ 10</button>
        </div>
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
      <Inputs />
    </>
  );
}
