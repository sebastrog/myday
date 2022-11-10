import { BsXLg } from "react-icons/bs";

import styles from "./styles/modal.module.scss"

const Modal = ({children, handleModal}) => {
  return <>
    <div className={`fixed top-0 left-0 w-full h-full p-8 z-50 ${styles.modal}`}>
      <div className="my-10 w-full">
        <div className={`bgTertiary relative w-2/4 text-white m-auto p-8 rounded ease-in-out duration-300 fadescaleIn ${styles.modal__dialog}`}>
          <button 
            className={`-right-2 -top-2 absolute rounded-full transition-all border-2 border-slate-800 hover:border-slate-700`}
            onClick={() => (handleModal(null))}
          >
            <div className={`flex items-center justify-center text-xs w-6 h-6 rounded-full bgTertiary`}>
              <BsXLg />
            </div>
          </button>
          {children}
        </div>
      </div>
    </div>
  </>
}
 
export default Modal;