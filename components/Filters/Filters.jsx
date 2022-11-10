import { useState } from "react";
import { RiHeartFill, RiFilter3Fill, RiListCheck, RiAlarmFill } from "react-icons/ri";

const Filters = () => {

  const [filterFavorites, setFilterFavorites] = useState(false)
  const [sortByDate, setSortByDate] = useState(false)
  const [byTodos, setByTodos] = useState(false)
  const [byReminders, setByReminders] = useState(false)

  return <>
    <div className={`flex items-center justify-center rounded ease-in-out duration-300 ${filterFavorites && "bgPrimary" || "bgSecondary"}`}>
      <button 
        className="py-2 px-2"
        onClick={() => setFilterFavorites(!filterFavorites)}
      >
        <RiHeartFill className={`ease-in-out duration-300 ${filterFavorites && "colorTertiary"}`} />
      </button>
    </div>

    <div className={`flex items-center justify-center rounded ease-in-out duration-300 ${sortByDate && "bgPrimary" || "bgSecondary"}`}>
      <button
        className="py-2 px-2"
        onClick={() => setSortByDate(!sortByDate)}
      > 
        <RiFilter3Fill className={`ease-in-out duration-300 ${sortByDate && "colorTertiary"}`} style={{transform: `${sortByDate ? "rotate(180deg)" : "rotate(0)"}`}} />
      </button>
    </div>

    <div className={`flex items-center justify-center rounded ease-in-out duration-300 ${byTodos && "bgPrimary" || "bgSecondary"}`}>
      <button
        className="py-2 px-2"
        onClick={() => setByTodos(!byTodos)}
      > 
        <RiListCheck className={`ease-in-out duration-300 ${byTodos && "colorTertiary"}`} />
      </button>
    </div>
    
    <div className={`flex items-center justify-center rounded ease-in-out duration-300 ${byReminders && "bgPrimary" || "bgSecondary"}`}>
      <button
        className="py-2 px-2"
        onClick={() => setByReminders(!byReminders)}
      > 
        <RiAlarmFill className={`ease-in-out duration-300 ${byReminders && "colorTertiary"}`} />
      </button>
    </div>
  </>
}
 
export default Filters;