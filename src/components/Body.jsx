<<<<<<< HEAD
import { Outlet } from "react-router-dom"
// import Maincontainer from "./Maincontainer"
import Sidebar from "./Sidebar"


const Body = () => {
   
  return (
    <div className="  w-screen h-screen">
    <Sidebar  />
   <Outlet/>

    </div>
  )
}

=======
import { Outlet } from "react-router-dom"
// import Maincontainer from "./Maincontainer"
import Sidebar from "./Sidebar"


const Body = () => {
   
  return (
    <div className="  w-screen h-screen">
    <Sidebar  />
   <Outlet/>

    </div>
  )
}

>>>>>>> a961a138bba5c8247523ddbf9c3b6d1012917cc9
export default Body