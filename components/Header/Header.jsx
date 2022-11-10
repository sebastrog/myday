
import { useState } from "react";
import Datetime from 'react-datetime';
import { RiFilter2Fill, RiEraserFill, RiCalendarEventFill } from "react-icons/ri";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";
import Filters from "../Filters/Filters";

const Header = () => {
  const [showFilters, setShowFilters] = useState(false)
  
  return <>
    <nav className="relative w-full flex flex-wrap items-center justify-between rounded-b-2xl py-3 px-6 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg bgTertiary">
      <div className="flex w-100 items-center gap-2">
        
        <HeaderSearch />

        <button 
          className={`flex items-center justify-center w-30 py-2 px-2 rounded ease-in-out duration-300 bgSecondary ${showFilters && "blink"}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <RiFilter2Fill />
        </button>

        <div className="flex items-center gap-2">
          {
            showFilters && 
            <div className="flex items-center fadeInFromLeft gap-2">
              <Filters />
            </div>
          }

          <div className="flex items-center justify-center bgSecondary w-30 py-1 px-2 rounded">
            <div className="flex items-center">
              <RiCalendarEventFill className="text-xl" />

              <div className="w-24">
                <Datetime
                  style={{width: "5rem"}}
                  initialValue={new Date()}
                  className="text-xs dateAndTimePicker_w-full dateAndTimePicker dateAndTimePicker_date" 
                  closeOnSelect={true} 
                  dateFormat="DD MMM YYYY"
                  timeFormat={false}
                />
              </div>
            </div>
          </div>
          
          {
            showFilters && 
            <button
              className="flex items-center justify-center rounded bgSecondary py-2 px-2  gap-1 fadeInFromLeft"
            > 
              <p className="text-xs">clear filters</p>
              <RiEraserFill className={`ease-in-out duration-300`} />
            </button>
          }
        </div>

      </div>

      <HeaderProfile />
    </nav>
  </>
}

export default Header