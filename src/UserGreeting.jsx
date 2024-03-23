import PropTypes from "prop-types";

function UserGreeting(props) {
  const WelcomeMessage = (
    <h2 className="bg-green-600 text-white p-2 rounded m-0">
      Hello {props.username}
    </h2>
  );

  const LoginMessage = (
    <h2 className="bg-red-600 text-white p-2 rounded m-0">
      Please log in to continue
    </h2>
  );

  return props.isLoggedIn ? WelcomeMessage : LoginMessage;
}

UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
