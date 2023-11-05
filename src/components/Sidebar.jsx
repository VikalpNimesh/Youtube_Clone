// import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className=" w-[12.5rem] drop-shadow-2xl p-2 m-2  flex flex-col ">
      <ul className=" flex flex-col items-center content-center gap-3 pb-4 border-b-2 font-bold ">
        <li> <Link to='/'>Home</Link></li>
       
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className=" flex flex-col items-center pb-4  border-b-2 content-center gap-3">
      <h1 className=" font-bold  p-2 ">Explore</h1>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
      <ul className=" flex flex-col items-center pt-4 content-center gap-3 mb-0">
      <h1 className=" font-bold ">You </h1>
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
