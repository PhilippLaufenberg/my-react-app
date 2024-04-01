import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIDRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIDRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => clearInterval(intervalIDRef.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    startTimeRef.current = 0;
  }

  function formatTime() {
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="flex flex-col items-center border-4 rounded-3xl p-7 m-3">
      <div className="pb-4 font-mono text-5xl drop-shadow-md text-gray-700">
        {formatTime()}
      </div>
      <div>
        <button
          onClick={start}
          className="bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out text-white py-2 px-5 m-1 min-w-16 border-none rounded-lg cursor-pointer"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white  py-2 px-5 m-1 min-w-16 border-none rounded-lg cursor-pointer"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out text-white  py-2 px-5 m-1 min-w-16 border-none rounded-lg cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
