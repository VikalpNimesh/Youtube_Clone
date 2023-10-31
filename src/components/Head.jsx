import { useDispatch } from "react-redux";
import logo_img from "../utils/logo_img.png";
import { toggleMenu } from "../utils/appSlices";

const Head = () => {
  const dispatch = useDispatch();

  const handleTogglemenu=()=>{
    dispatch(toggleMenu())

  }

  return (
    <div className=" p-2  grid grid-flow-col shadow-md ">
      <div className="  col-span-1 flex gap-2 items-center overflow-hidden">
        <img
          className=" h-10"
          onClick={()=>handleTogglemenu()}
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
          alt="menu"
        />
        <img className=" h-10" src={logo_img} alt="Logo" />
      </div>
      <div className="  col-span-10 flex ">
        <input
          className=" w-2/3 outline-none text-xl px-3 border-2 rounded-l-full border-gray-200"
          type="text"
        />
        <button className=" px-4 py-2 bg-gray-300 rounded-r-full">
          Search
        </button>
      </div>
      <div className="  col-span-1 flex items-center">
        <img
          className=" h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
          alt=" User"
        />
      </div>
    </div>
  );
};

export default Head;
