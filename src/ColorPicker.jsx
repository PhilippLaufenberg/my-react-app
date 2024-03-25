import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-12 font-bold">Color Picker</h1>
      <div
        className="w-72 h-72 flex justify-center items-center border-4 border-gray-300 rounded-xl mb-6 transition duration-250 ease-linear"
        style={{ backgroundColor: color }}
      >
        <p className="text-gray-800 text-center text-xl">
          Selected Color: {color}
        </p>
      </div>
      <label className="font-bold text-lg mb-2">Select a Color:</label>
      <input
        className="w-20 h-12 p-1 border-2 rounded-lg border-gray-400"
        type="color"
        value={color}
        onChange={handleColorChange}
      ></input>
    </div>
  );
}

export default ColorPicker;
