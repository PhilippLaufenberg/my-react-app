function ProfilePicture() {
  const imageUrl = "./src/assets/profile_phil.jpg";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return (
    <img
      onClick={(e) => handleClick(e)}
      className=""
      src={imageUrl}
      alt="profile picture"
    ></img>
  );
}

export default ProfilePicture;
