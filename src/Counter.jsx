import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="text-center">
      <p className="text-9xl mt-0 mb-12">{count}</p>
      <button
        onClick={incrementCount}
        className="w-36 h-9 text-white font-bold mx-1 rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
      >
        Increment
      </button>
      <button
        onClick={decrementCount}
        className="w-36 h-9 text-white font-bold mx-1 rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
      >
        Decrement
      </button>
      <button
        onClick={resetCount}
        className="w-36 h-9 text-white font-bold mx-1 rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
      >
        Reset
      </button>
    </div>
  );
}
export default Counter;
