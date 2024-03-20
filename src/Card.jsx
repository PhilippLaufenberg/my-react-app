import profilePic from "./assets/profile_phil.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Phil Laufenberg</h2>
      <p className="card-text">
        I am a product leader who is upskilling on a fullstack web application.
      </p>
    </div>
  );
}

export default Card;
