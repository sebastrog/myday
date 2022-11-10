import { BsSearch } from "react-icons/bs";

const HeaderSearch = () => {
  return <div className="input-group relative flex flex-wrap items-stretch w-52 pl-8 relative bg-white rounded-2xl">
    <button className="absolute bgTertiary flex h-6  items-center justify-center top-0.5 left-0.5 rounded-full w-6">
      <BsSearch className="text-xs"/>
    </button>
    <input type="search" className="bg-none form-control relative flex-auto min-w-0 block w-full  pr-2 py-1.5 text-xs text-gray-700 bg-white bg-clip-padding border border-none transition ease-in-out m-0 focus:text-gray-900  focus:border-none focus:outline-none" placeholder="Search notes and todos!" aria-label="Search" />
  </div>
}
 
export default HeaderSearch;