import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlices";

const Watchpage = () => {
  const [searchparam] = useSearchParams();
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(closeMenu());
  }, []);

  return (
    <div className=" p-5  ">
      <iframe 
        width="1100"
        height="600"
        src={"https://www.youtube.com/embed/" + searchparam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
