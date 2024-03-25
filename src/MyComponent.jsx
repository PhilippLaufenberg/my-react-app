import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("John");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Hello {name}</p>
      <button onClick={updateName}>Change Name</button>
      <p>Age {age}</p>
      <button onClick={updateAge}>Increment Age</button>
      <p>Is employed? {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleIsEmployed}>Toggle emplyed status</button>
    </div>
  );
}

export default MyComponent;
