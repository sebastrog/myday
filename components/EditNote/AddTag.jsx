import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const AddTag = ({addTag}) => {
  const [tag, setTag] = useState("")

  const handleTag = e => {
    setTag(e.target.value)
  }

  return <div className="flex ml-2 bgTertiary_600 p-1">
    <input 
      className="bg-none w-16 text-xs" 
      placeholder="Add Tag" 
      value={tag}
      onChange={handleTag}
    />
    <button 
      className="ml-2"
      onClick={() => {if(tag) return (addTag(tag), setTag(""))}} 
    >
      <BsPlusCircleDotted className="text-lg"/>
    </button>
  </div>  
}
 
export default AddTag;