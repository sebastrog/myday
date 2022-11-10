import Masonry from 'react-masonry-css'
import { BsCalendarCheckFill, BsFillStopwatchFill, BsPencilFill, BsBookmarkHeartFill } from "react-icons/bs";
import { RiDeleteBin5Fill, RiPencilFill, RiStickyNoteFill } from "react-icons/ri";
import Note from './Note';
import { useState } from 'react';

const mockNotes = [
  {
    "id": 12312312,
    "note": "",
    "userId": "chomauser",
    "favorite": 0,
    "createdAt": "1 Nov 2022 3:30 Pm",
    "reminderAt": "",
    "todos": [
      {
        "id": 1231,
        "text": "terminar nuevo template sitio web",
        "status": 0,
      },
      {
        "id": 12342,
        "text": "terminar el frito",
        "status": 1,
      },
      {
        "id": 12323421,
        "text": "comprar la leche",
        "status": 0,
      }
    ],
    "tags": []
  },
  {
    "id": 1232123,
    "note": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate sequi molestias quidem repellendus architecto neque, recusandae voluptatem ipsa minima atque.",
    "userId": "chomauser",
    "favorite": 0,
    "createdAt": "25 Oct 2022 3:30 Pm",
    "reminderAt": "31 Oct 2022 3:30 Pm",
    "todos": [],
    "tags": []
  },
  {
    "id": 2321,
    "note": "Lorem ipsum dolor sit. quidem repellendus architecto neque, recusandae voluptatem.",
    "userId": "chomauser",
    "favorite": 1,
    "createdAt": "20 Oct 2022 3:30 Pm",
    "reminderAt": "20 nov 2022 5:30 Pm",
    "todos": [
      {
        "id": 223,
        "text": "terminar el frito",
        "status": 1,
      },
      {
        "id": 31232,
        "text": "estudiar js!",
        "status": 0,
      }
    ],
    "tags": [
      {
        "id": "jdhfjd23h223423",
        "tag": 'camello'
      },
      {
        "id": "jdhfjd23h2233242423",
        "tag": 'estudio'
      },
    ]
  },
]

const breakpointColumnsObj = {
  default: 5, 1460: 3, 1024: 2, 600: 1
};

const MasonryLayout = ({handleModal, handleModalComponent, modal}) => {
  const [notes, setNotes] = useState(mockNotes)

  return <>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    > 
      {
        notes.map(note => 
          <div className="masonry-child fadescaleIn" key={note.id}>
            <Note {...note} handleModal={handleModal} handleModalComponent={handleModalComponent} modal={modal} />
          </div>
        )
      }
    </Masonry>
  </>
}

export default MasonryLayout;