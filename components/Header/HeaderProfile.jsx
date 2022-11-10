
import React, { useState, useRef  } from "react"
import Image from "next/image"
import { useOutsideAlerter } from "../../utils/dropDown";

const HeaderProfile = () => {
  const [dropDown, setDropDown] = useState(false)
  const box = useRef(null);
  useOutsideAlerter(box, dropDown, setDropDown);
  
  return <div className="dropdown relative" ref={box}>
    <button 
      className="dropdown-toggle flex items-center hidden-arrow"
      onClick={() => setDropDown(!dropDown)}
    >
      <Image 
        src="https://mdbootstrap.com/img/new/avatars/2.jpg" 
        className="rounded-full" 
        width={25} 
        height={25}
        alt="" 
        loading="lazy" 
      />
      <p className="ml-2 text-xs"><b>sebastiancg@gmail.....</b></p>
    </button>
    {
      dropDown && 
      <ul className="dropdown-menu min-w-max border-2 border-slate-700 absolute bgTertiary text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding left-auto right-0" >
        <li className="w-40">
          <button className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-800 rounded-lg">Log Out</button>
        </li>
      </ul>
    }
  </div>
}

export default HeaderProfile