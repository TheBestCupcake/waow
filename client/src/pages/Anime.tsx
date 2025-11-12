function Anime() {
  return (
    <>
      <h1>Gigi Murin???</h1>
      <div className="videoContainer">
        <video controls className="videoDisplay">
          <source src="src/database/gigi.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Anime;
