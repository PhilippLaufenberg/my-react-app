import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index - 1],
      ];
      setTasks(newTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index + 1],
      ];
      setTasks(newTasks);
    }
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">To-Do-List</h1>{" "}
      <div className="flex place-content-center mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline"
        />
        <button
          className="px-3 py-1 text-white font-bold mx-1 rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <>
            <div className="flex place-content-center" key={index}>
              <li className="py-1 flex w-full">
                <span
                  className="font-semibold flex-grow text-center cursor-pointer"
                  onClick={() => handleRemoveTask(index)}
                >
                  {task}
                </span>
                <button
                  className="mx-3 px-3 text-white font-bold rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
                  onClick={() => handleRemoveTask(index)}
                >
                  Delete
                </button>
                <button
                  className="mx-3 px-3 text-white font-bold rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
                  onClick={() => moveTaskUp(index)}
                >
                  Up
                </button>
                <button
                  className="mx-3 px-3 text-white font-bold rounded cursor-pointer bg-blue-500 hover:bg-blue-300"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
              </li>
            </div>
          </>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
