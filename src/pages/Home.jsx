import App from '../App'
import { fetchStatus } from '../components/APIStatus'
import { useEffect} from 'react'
import { useSelector } from 'react-redux'
import GetCoins from '../components/GetCoins'

const Home = () => {
  const {theme} = useSelector(state=>state.theme)
    useEffect(()=>{
         fetchStatus()
      
    },[])
  return (
    <App>
    <div className={` w-screen px-4 ${theme && 'bg-[#0D0B1C] text-white'}`}>
        <GetCoins />
    </div>
    </App>
  )
}

export default Home