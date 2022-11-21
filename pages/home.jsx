import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Masonry from "../components/Masonry";
import Modal from "../components/Modal";
import EditNote from "../components/EditNote/EditNote";

const newNote = {
  id: null,
  note: "",
  tags: [],
  favorite: false,
  createdAt: new Date(),
  todos: [],
  reminderAt: "",
}

const Home = () => {

  const [modal, setModal] = useState(false)
  const [modalChildren, setModalChildren ] = useState(null)
  const [notes, setNotes] = useState([])

  const handleModal = (ModalChildren) => {
    setModal(!modal);
    setModalChildren({...ModalChildren})
  }

  const newNote = (note) => {
    const localStorageNotes = localStorage.getItem('notes');

    if(localStorageNotes) {
      const getNotesFromStorage = JSON.parse(localStorageNotes) 
      const currentNotesAndNewOne =  [...getNotesFromStorage, note]
      localStorage.setItem('notes', JSON.stringify(currentNotesAndNewOne));
      setNotes([...notes, note])
    } else {
      localStorage.setItem('notes', JSON.stringify([note]));
      setNotes([note])
    }

  }

  useEffect(() => {
    const localStorageNotes = localStorage.getItem('notes');
    if(localStorageNotes) setNotes(JSON.parse(localStorageNotes) )
  }, [])

  return (
    <>
      <Header />

      <div className="mt-5 px-5">
        <Masonry handleModal={handleModal} modal={modal} notes={notes} />
      </div>

      {
        modal && 
        <Modal 
          handleModal={handleModal}
        >
          {modalChildren}
        </Modal> 
      }

      <button 
        className="text-sm rounded bgPrimary text-black font-bold py-1 px-5 absolute bottom-5 right-6 z-10"
        onClick={() => handleModal(<EditNote editObj={newNote} newNote={newNote} />) }
      >
        add note
      </button>
    </>
  );
}
 
export default Home;