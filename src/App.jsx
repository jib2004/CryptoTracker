import Navbar from "./components/Navbar"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";


function App({children}) {
  const [displayMenu,setDisplayMenu] = useState(false)

  const handleMenu = () =>{
   setDisplayMenu(!displayMenu)
  }
  return (
    <>
    <div className={`py-2 xl:hidden ${displayMenu ? ' hidden': 'block'}`}>
    <GiHamburgerMenu onClick={handleMenu} className={`size-[24px] xl:hidden ${displayMenu ? ' hidden': 'block'}`} />
    </div>
    <div className="flex">
     
    <Navbar  menu={displayMenu} setMenu={handleMenu} />
      {children}
      
    </div>
    </>
  )
}

export default App
