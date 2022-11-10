const appRedirect = () => {
  if(typeof window !== "undefined" && window.localStorage.getItem('daynalistUser')) return true
  return false
}


export default appRedirect