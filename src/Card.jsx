import profilePic from "./assets/profile_phil.jpg";

function Card() {
  return (
    <div className="card w-60 border rounded-lg shadow-lg overflow-hidden inline-block m-1">
      <img
        className="card-image w-full h-1/2 object-cover"
        src={profilePic}
        alt="profile picture"
      ></img>
      <div className="card-body p-3">
        <h2 className="card-title px-3">Phil Laufenberg</h2>
        <p className="card-text text-gray-600 mt-1 text-sm px-3 pb-1">
          I am a product leader who is upskilling on a fullstack web
          application.
        </p>
      </div>
    </div>
  );
}

export default Card;
