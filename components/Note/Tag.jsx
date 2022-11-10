import { useState } from "react";
import { RiDeleteBin5Fill, RiCheckboxCircleFill, RiCloseCircleFill  } from "react-icons/ri";

const Tag = ({tag, id, deleteTag}) => {
  const [ showDelete, setShowDelete] = useState(false)
  const [ tagTodo, setTagTodo] = useState(tag)

  return <div className="ml-1 p-1 bgTertiary bgTertiary_600 rounded text-xs flex items-center relative gap-2 fadeInFromLeft">
    <input value={tagTodo} className="bg-none border-none outline-none w-12" onChange={e => setTagTodo(e.target.value)} />
    <button onClick={() => setShowDelete(!showDelete)}>
      <RiDeleteBin5Fill />
    </button>

    {
      showDelete &&
      <div className={`flex items-center justify-center absolute rounded w-full px-1 h-full top-0 right-0 bgQuaternary_300 ease-in-out duration-300 ${showDelete && "fadeInFromRight"}`}>
        <button className="text-lg" onClick={() => (setShowDelete(!showDelete), deleteTag(id))}>
          <RiCheckboxCircleFill />
        </button>
        <button className="text-lg"  onClick={() => setShowDelete(!showDelete)}>
          <RiCloseCircleFill />
        </button>
      </div>
    }
  </div>
}
 
export default Tag;