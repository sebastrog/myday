import { useEffect} from "react"

export const useOutsideAlerter = (ref, dropDown, setDropDown) => {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(dropDown && false);
      }
    }
  
    if(!dropDown) {
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [ref]);
}