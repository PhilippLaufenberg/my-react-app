import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="font-sans text-sm p-2 border">
      <p className="m-0">Name: {props.name}</p>
      <p className="m-0">Age: {props.age}</p>
      <p className="m-0">Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
