
import React, { useState, useRef  } from "react"
import { BsFillBellFill, BsFillStopwatchFill } from "react-icons/bs";
import { useOutsideAlerter } from "../../utils/dropDown";

const HeaderNotifications = () => {
  const [dropDown, setDropDown] = useState(false)
  const box = useRef(null);
  useOutsideAlerter(box, dropDown, setDropDown);
  
  return <div className="dropdown relative" ref={box}>
    <button 
      className="dropdown-toggle flex items-center hidden-arrow"
      onClick={() => setDropDown(!dropDown)}
    >
      <BsFillBellFill />
      <span className="text-white bg-red-700 absolute rounded-full -mt-2.5 ml-2 p-1"></span>
    </button>

    {
      dropDown && 
      <ul className="dropdown-menu min-w-max border-2 border-slate-700 absolute bgTertiary text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding left-auto right-0">
        <li className="w-60">
          <span className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-800 rounded-lg" href="#">
            <BsFillStopwatchFill />
          </span>
        </li>
        <li className="w-60">
          <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-800 rounded-lg" href="#">noti 2</a>
        </li>
        <li className="w-60">
          <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-800 rounded-lg" href="#">noti 2</a>
        </li>
      </ul>
    }
  </div>
}

export default HeaderNotifications
