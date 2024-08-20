import Navbar from "./components/Navbar"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";



function App({children}) {
  const [displayMenu,setDisplayMenu] = useState(false)
  const {theme} = useSelector(state=>state.theme)

  const handleMenu = () =>{
   setDisplayMenu(!displayMenu)
  }
  return (
    <>
    <div className={`py-2 px-2  xl:hidden ${displayMenu ? ' hidden': 'block'} ${theme && 'bg-[#0D0B1C] text-white'}`}>
    <GiHamburgerMenu onClick={handleMenu} className={`size-[24px] xl:hidden ${displayMenu ? ' hidden': 'block'} `} />
    </div>
    <div className="flex">
     
    <Navbar  menu={displayMenu} setMenu={handleMenu} />
      {children}
      
    </div>
    </>
  )
}

export default App
