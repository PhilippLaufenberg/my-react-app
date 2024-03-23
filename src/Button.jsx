function Button() {
  const handleClick = (e) => (e.target.textContent = "Ouch!");

  return (
    <button
      onDoubleClick={(e) => handleClick(e)}
      className="bg-blue-500 text-white py-2 px-5 rounded border-none cursor-pointer"
    >
      Click me 😀
    </button>
  );
}

export default Button;
