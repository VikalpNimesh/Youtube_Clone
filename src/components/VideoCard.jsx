import { useEffect, useState } from "react";
import VideoBox from "./VideoBox";
import { Link } from "react-router-dom";
// import Watchpage from "./Watchpage";

const VideoCard = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const [video, setvideo] = useState([]);

  const getVideos = async () => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCEt4pRiJ_tNzpU7BVSLhH7Ao3v3ugnpWg"
    );

    const data = await response.json();
    setvideo(data?.items);
  };

  return (
    <>
      <div className=" flex flex-wrap  gap-8 justify-center  ">
        {video.map((video) => (
          <Link to={"/watch?v=" +video.id} key={video.id}><VideoBox  info={video} /></Link>
        ))}
      </div>
    </>
  );
};

export default VideoCard;
