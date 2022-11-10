import { useEffect } from "react";
import { useState } from "react";
import { RiPencilFill, RiHeartFill, RiAlarmFill } from "react-icons/ri";

import EditNote from "./EditNote/EditNote";

const Note = ({id, note, tags, favorite, createdAt, todos, reminderAt, handleModal, modal}) => {

  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if(!modal) return setEditing(false)
  }, [modal])

  return <>
    <div className={`relative`}>
      <button 
        className={`-right-2 -top-2 absolute rounded-full transition-all border-2 border-slate-800 hover:border-slate-700 ${editing && "blink"}`}
        onClick={() => (setEditing(!editing), handleModal(<EditNote editObj={{id, note, tags, favorite, createdAt, todos, reminderAt, handleModal, modal}} />)) }
      >
        <div className={`flex items-center justify-center text-xs w-6 h-6 rounded-full ${!editing ? "bgTertiary" : "bgPrimary"}`}>
          <RiPencilFill className={`text-sm ${!editing ? "" : "colorSecondary"}`} />
        </div>
      </button>

      <div className="w-full text-sm rounded bgTertiary text-white">
          <div className="p-5">

            {
              reminderAt && 
              <div className="mb-4">
                <div className="flex w-full items-center">
                  <RiAlarmFill className="text-lg" />
                  <h2 className="ml-2"><i>Reminder to <span className="colorPrimary" >{reminderAt}</span></i></h2>
                </div>
              </div>
            }

            {
              note && 
              <div className="bgSecondary p-3 rounded mb-4">
                <p>{note}</p>
              </div>
            }

            {
              todos?.length > 0 &&
              <ul>
                {
                  todos.map(todo => 
                    <li className={`list__item rounded mb-4 px-4 py-3 ${todo.status ? "is-checked" : ""}`} key={todo.id}>
                        <div className="flex">
                            {/* {
                              editing &&
                              <button disabled className="flex-none list__item__check block rounded relative mr-3"></button>
                            } */}
                            <p className="flex-auto">
                              <input type="text" value={todo.text} disabled className="bg-none" /> 
                            </p>
                        </div>
                    </li>
                  )
                }
              </ul>
            }

            {
              tags?.length > 0 &&
              <div className="flex items-center justify-end mb-3 text-xs">
                {
                  tags.map(tag => 
                    <p className="ml-1 p-1 bgTertiary bgTertiary_600 rounded" key={tag.id}>{tag.tag}</p>
                  )
                }
              </div>
            }

            <div className="flex justify-between">
              <div className="flex items-center">
                <button disabled>
                  <RiHeartFill className={`text-lg ${favorite && "colorPrimary"}`} />
                </button>
              </div>
              <p className="bgSecondary py-2 px-4 rounded ml-2">{createdAt}</p>
            </div>
          </div>
      </div>
    </div>
  </>
}
 
export default Note;