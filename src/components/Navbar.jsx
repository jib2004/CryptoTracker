import logo from '../assets/Logo.png'
import {useLocation,Link} from 'react-router-dom'
import { MdClose } from "react-icons/md";

const Navbar = ({menu,setMenu}) => {
    const {pathname} = useLocation()

  return (
    <div className={`w-screen absolute z-10 xl:w-[269px] xl:static h-screen bg-[#f2f2f2] flex flex-col items-center justify-between py-6 shadow-sm duration-300 xl:translate-x-0 ${menu ? ' translate-x-0': ' -translate-x-[1000px]'}`}> 
    <div className='flex flex-col gap-8 w-full xl:items-center '>
    <div className=' flex justify-end px-2 xl:hidden'><MdClose className='size-[24px]' onClick={setMenu}/></div>
        <div>
            <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>

        <ul className='w-full flex flex-col xl:items-end'>
            
            <Link to={'/'} className={`text-[#A5A2B8] py-2 px-4 xl:w-[209px] font-medium ${pathname === '/' && 'text-[#352E5B] border-e-[4px] border-[#7D67FF]'}`}>Home</Link>
            <Link to={'/chart/bitcoin/10'} className={`text-[#A5A2B8] py-2 px-4 xl:w-[209px] font-medium ${pathname.includes('/chart') && 'text-[#352E5B] border-e-[4px] border-[#7D67FF]'}`}>Chart</Link>
        </ul>
    </div>
    <div>
        <button className='bg-[#7D67FF] text-white px-4 py-2 rounded-md w-[205px] h-[56px]'>Guide</button>
    </div>
    </div>
  )
}

export default Navbar