import App from '../App'
import { fetchStatus } from '../components/APIStatus'
import { useEffect} from 'react'


import GetCoins from '../components/GetCoins'

const Home = () => {
    useEffect(()=>{
         fetchStatus()
      
    },[])
  return (
    <App>
    <div className=' w-screen px-4'>
        <GetCoins />
    </div>
    </App>
  )
}

export default Home