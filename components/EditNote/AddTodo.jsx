import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState("")

  const handleTodo = e => {
    setTodo(e.target.value)
  }

  return <div className="flex ml-2 bgTertiary_600 p-1">
    <input 
      className="bg-none w-16 text-xs" 
      placeholder="Add Todo" 
      value={todo}
      onChange={handleTodo}
    />
    <button 
      className="ml-2"
      onClick={() => {if(todo) return (addTodo(todo), setTodo(""))}} 
    >
      <BsPlusCircleDotted className="text-lg"/>
    </button>
  </div>  
}
 
export default AddTodo;