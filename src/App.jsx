import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username={"Phil"} />
    </>
  );
}

export default App;
