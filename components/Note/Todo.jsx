import { useState } from "react";
import { RiDeleteBin5Fill, RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";

const Todo = ({status, id, text, deleteTodo}) => {

  const [ showDelete, setShowDelete] = useState(false)
  const [ statusTodo, setStatusTodo] = useState(status)
  const [ textTodo, setTextTodo] = useState(text)
  
  return <li className={`list__item rounded relative mb-4 px-4 py-3 fadeInFromLeft ${statusTodo ? "is-checked" : ""}`} key={id}>
    <div className="flex gap-2">
      <button 
        className="flex-none list__item__check block rounded relative" 
        onClick={() => setStatusTodo(!statusTodo)}
        disabled={!statusTodo && !textTodo}
      >  
      </button>
      
      <p className="flex-auto pr-4">
        <input 
          className="bg-none border-b border-b-gray-600" onChange={e => setTextTodo(e.target.value)}
          type="text"
          value={textTodo} 
          disabled={statusTodo && textTodo}
        /> 
      </p>

      <button onClick={() => setShowDelete(!showDelete)}>
        <RiDeleteBin5Fill />
      </button>

      {
        showDelete &&
        <div className={`flex items-center justify-center absolute rounded px-3 h-full top-0 right-0 gap-2 bgQuaternary_300 ease-in-out duration-300 ${showDelete && "fadeInFromRight"}`}>
          <p>Delete?</p>
          <button className="text-lg" onClick={() => (setShowDelete(!showDelete), deleteTodo(id))}>
            <RiCheckboxCircleFill />
          </button>
          <button className="text-lg"  onClick={() => setShowDelete(!showDelete)}>
            <RiCloseCircleFill />
          </button>
        </div>
      }
    </div>

  </li>
}
 
export default Todo;