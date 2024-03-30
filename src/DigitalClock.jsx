import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  function tick() {
    setTime(new Date());
  }

  function formatTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  }

  function padNumber(number) {
    return number < 10 ? `0${number}` : number;
  }

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="bg-[url('./assets/background_clock.png')] bg-center h-screen w-screen">
      <div className="flex justify-center min-h-screen items-center w-screen ">
        <p className="shadow text-6xl py-3 font-bold text-white w-screen text-center backdrop-blur">
          {formatTime(time)}
        </p>
      </div>
    </div>
  );
}

export default DigitalClock;
