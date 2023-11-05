import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlices";
import Commentscontainer from "./Commentscontainer";
import LivechatContainer from "./LivechatContainer";

const Watchpage = () => {
  const [searchparam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" p-1 m-auto ">
      <div className=" p-3  flex  justify-center items-center">
        <iframe
          width="800"
          height="500"
          className="
          rounded-2xl"
          src={"https://www.youtube.com/embed/" + searchparam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LivechatContainer />
      </div>
      <Commentscontainer />
    </div>
  );
};

export default Watchpage;
