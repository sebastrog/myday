import { BsFillHouseDoorFill, BsBookmarkHeartFill } from "react-icons/bs";

const SideBar = () => {
  return <>
    <div className="w-60 h-full shadow-md bgTertiary  absolute ">
      <div className="py-3 pl-7">DAYNALIST</div>
      <ul className="relative">
        <li className="relative pl-5">
          <a className="flex items-center text-sm py-4 pl-3 pr-4 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-l-2xl transition duration-300 ease-in-out hover:text-gray-900 hover:bg-gray-100" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
            <BsFillHouseDoorFill className=" h-5 mr-2" />
            <span className="font-bold">HOME</span>
          </a>
        </li>

        <li className="relative pl-5">
          <a className="flex items-center text-sm py-4 pl-3 pr-4 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-l-2xl transition duration-300 ease-in-out hover:text-gray-900 hover:bg-gray-100" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
            <BsBookmarkHeartFill className=" h-5 mr-2" />
            <span className="font-bold">FAVORITES</span>
          </a>
        </li>
      </ul>
    </div>
  </>
}
 
export default SideBar;