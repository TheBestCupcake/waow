import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/videoServices";

function Anime() {
  //Logic for getting the video url.
  const [videoUrl, setVideoUrl] = useState("");
  const [videoName, setVideoName] = useState("");

  useEffect(() => {
    const loadVideo = async () => {
      const data = await fetchVideos();
      setVideoUrl(data.url);
      setVideoName(data.name);
    };

    loadVideo();
  }, []);

  return (
    <>
      <h1>{videoName}</h1>
      <div className="videoContainer">
        {videoUrl ? ( //CHecks for videoUrl to not be empty first.
          <video controls className="videoDisplay">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p> //This displays while videoUrl is loading.
        )}
      </div>
    </>
  );
}

export default Anime;
