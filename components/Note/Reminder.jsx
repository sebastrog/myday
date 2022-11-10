import { useState } from "react";
import Datetime from 'react-datetime';
import { BsFillStopwatchFill } from "react-icons/bs";
import { RiDeleteBin5Fill, RiCheckboxCircleFill, RiCloseCircleFill  } from "react-icons/ri";

import "react-datetime/css/react-datetime.css";

const Reminder = ({reminderAt, removeReminder}) => {
  const [ value, setValue] = useState(reminderAt)
  const [ showDelete, setShowDelete] = useState(false)
  
  return <div className="flex items-center mb-4 fadeInFromLeft relative z-50">
    <div className="relative">

      {
        value && 
        <div className="flex w-full items-center">
          <BsFillStopwatchFill />
          <h2 className="ml-2 flex items-center">
            <i>Reminder to</i>
            <Datetime 
              initialValue={reminderAt ? reminderAt : value}
              value={value}
              className="ml-1 dateAndTimePicker" 
              closeOnSelect={true} 
              dateFormat="DD MMM YYYY"
              onChange={e => setValue(e._d)}
            />
          </h2>
          <button className="ml-3" onClick={() => setShowDelete(!showDelete)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
      }

      {
        showDelete &&
        <div className={`flex items-center justify-center absolute rounded px-3 h-full top-0 right-0 bgQuaternary_300 ease-in-out duration-300 gap-2 ${showDelete && "fadeInFromRight"}`}>
          <p>Delete?</p>
          <button className="text-lg" onClick={() => (setShowDelete(!showDelete), removeReminder() )}>
            <RiCheckboxCircleFill />
          </button>
          <button className="text-lg"  onClick={() => setShowDelete(!showDelete)}>
            <RiCloseCircleFill />
          </button>
        </div>
      }
    </div>
  </div>
}
 
export default Reminder;