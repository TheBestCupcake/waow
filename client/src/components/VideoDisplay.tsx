import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/videoServices";

function VideoDisplay() {
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
          <iframe
            className="videoDisplay"
            src={videoUrl}
            title={videoName}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading video...</p> //This displays while videoUrl is loading.
        )}
      </div>
    </>
  );
}

export default VideoDisplay;
