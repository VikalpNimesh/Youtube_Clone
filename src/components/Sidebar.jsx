// import React from "react";

import { useSelector } from "react-redux";


const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className=" w-48 shadow-md p-2 m-2 gap-3 flex flex-col content-center ">
      <ul className=" flex flex-col items-center content-center gap-3 pb-4 border-b-2 font-bold ">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className=" font-bold ">Explore</h1>
      <ul className=" flex flex-col items-center content-center gap-3">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
      <h1 className=" font-bold ">You </h1>
      <ul className=" flex flex-col items-center content-center gap-3 mb-0">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Subscription</li>
        <li>Subscription</li>
        <li>Subscription</li>
      </ul>

      
    </div>
  );
};

export default Sidebar;