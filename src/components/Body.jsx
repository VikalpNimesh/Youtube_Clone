import { Outlet } from "react-router-dom"
// import Maincontainer from "./Maincontainer"
import Sidebar from "./Sidebar"


const Body = () => {
   
  return (
    <div className=" flex gap-7">
    <Sidebar  />
   <Outlet/>

    </div>
  )
}

export default Body