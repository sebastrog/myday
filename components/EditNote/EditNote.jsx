import { useState } from "react";
import { BsSuitHeartFill, BsPlusCircleDotted, BsFillCalendar2CheckFill } from "react-icons/bs";
import { RiDeleteBin5Fill, RiCheckboxCircleFill, RiCloseCircleFill  } from "react-icons/ri";
import Datetime from 'react-datetime';

import Reminder from "../Note/Reminder";
import Tags from "../Note/Tags";
import Todos from "../Note/Todos";
import AddTodo from "./AddTodo";
import AddTag from "./AddTag";

import "react-datetime/css/react-datetime.css";

const EditNote = ({editObj: {id, note, tags, favorite, createdAt, todos, reminderAt}}) => {

  const [showDelete, setShowDelete] = useState(false)
  const [markedAsFavofite, setMarkedAsFavofite] = useState(favorite)
  const [noteReminder, setReminder] = useState(reminderAt)
  const [noteText, setNoteText] = useState(note)
  const [noteTodos, setNoteTodos] = useState(todos)
  const [noteTags, setNoteTags] = useState(tags)

  const removeReminder = () => {
    setReminder('')
  }

  const addTodo = (text) => {
    const newTodo = {
      "id": `${noteTodos.length + 1}-${new Date().getTime()}`,
      text,
      "status": 0
    }
    if (!noteTodos.some(e => e.text === text)) {
      setNoteTodos([...noteTodos, newTodo ])
    }
  }

  const deleteTodo = id => {
    const todoToDelete = noteTodos.filter(todo => todo.id !== id)
    setNoteTodos(todoToDelete)
  }

  const addTag = tag => {
    console.log(tag)
    const newTag = {
      "id": `${noteTags.length + 1}-${new Date().getTime()}`,
      tag,
    }
    
    if (!noteTags.some(e => e.tag === tag)) {
      setNoteTags([...noteTags, newTag ])
    }
  }

  const deleteTag = id => {
    const tagToDelete = noteTags.filter(tag => tag.id !== id)
    setNoteTags(tagToDelete)
  }

  return <>
    <div className={`relative`}>
      <div className="w-full text-sm rounded bgTertiary text-white">
        <div>

          {
            !noteReminder && 
            <div className="flex p-1 mb-4">
              <button 
                className="flex items-center"
                onClick={() => setReminder(new Date())}
                >
                <p className="text-xs">Add Reminder</p>
                <BsPlusCircleDotted className="ml-2 text-lg"/>
              </button>
            </div> || <Reminder reminderAt={noteReminder} removeReminder={removeReminder} />
          }

          <div className="mb-4">
            <textarea 
              className="bgSecondary p-3 rounded border-none w-full outline-none snap-mandatory h-40" placeholder={!note ? "Add Note" : ""} 
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
            >
              </textarea>
          </div>

          {
            !!noteTodos.length &&
            <Todos todos={noteTodos} deleteTodo={deleteTodo} />
          }

          <div className="flex items-center justify-end mb-3">
            <AddTodo addTodo={addTodo} />          
          </div>

          <div className="flex items-center justify-end mb-3">
            {
              !!noteTags.length &&
              <Tags tags={noteTags} deleteTag={deleteTag} />
            }

            <AddTag addTag={addTag} />
          </div>

          <div className="flex justify-between mb-8">
            <div className="flex items-center">
                <button className="flex items-center" onClick={() => setMarkedAsFavofite(!markedAsFavofite)}>
                <BsSuitHeartFill className={`text-sm ease-in-out duration-300 ${markedAsFavofite && "colorPrimary"}`} />
                <p className="ml-3">{`${!markedAsFavofite ? "Set as Favorite" : "Remove as Favorite"}`}</p>
              </button>
            </div>
            
            <div className="flex items-center">
              <BsFillCalendar2CheckFill />
              <h2 className="flex items-center">
                <Datetime 
                  initialValue={createdAt}
                  className="ml-1 dateAndTimePicker dateAndTimePicker_date dateAndTimePicker_up" 
                  closeOnSelect={true} 
                  dateFormat="DD MMM YYYY"
                />
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <button 
              className="text-sm rounded bgPrimary text-black font-bold py-1 px-5 block"
            >
              save note
            </button>
            
            <div className="flex items-center  relative">
              <button
                className="text-sm rounded bgQuaternary_300 text-white font-bold py-1 flex gap-1 items-center px-5 block "
                onClick={() => setShowDelete(!showDelete)}
              >
                <RiDeleteBin5Fill />
                <p>delete note</p>
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
          </div>
        </div>
      </div>
    </div>
  </>
}
 
export default EditNote;