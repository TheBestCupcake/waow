import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchVideos } from "../utils/videoServices";
import VideoDisplay from "../components/VideoDisplay";

interface videoTitleProps {
  name: string;
}

function Anime() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos();
      setVideoList(data);
    };

    getVideos();
  }, []);

  videoList.map((data: videoTitleProps) => data.name);

  const videoRouterObjects = videoList.map((video: videoTitleProps) => (
    <Link
      key={`${video.name}`}
      to={`/Anime/${video.name}`}
      className="animePageLinks"
    >
      {video.name}
    </Link>
  ));

  return (
    <>
      <nav className="animePageWrapper">{videoRouterObjects}</nav>
    </>
  );
}

export default Anime;
