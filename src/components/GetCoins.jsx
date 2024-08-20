import { useEffect,useState } from 'react'
import { fetchCoins } from '../components/FetchCoins'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GetCoins = () => {
    const [coins, setCoins] = useState([])
    const [loading,setLoading] = useState(false)
    const [input,setInput] =  useState('')
    const {theme} = useSelector(state=>state.theme)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
          try {
            const data = await fetchCoins();
            setCoins(data);
            setLoading(false)
          } catch (error) {
            console.error(error);
            setLoading(false)
          }
        };
        fetchData();
      }, []);

      const handleGetChart = (id) =>{
        navigate(`/chart/${
          id}/10`)
      }
      

  return (
    <div className='h-screen overflow-y-auto pt-4 overflow-x-auto xl:overflow-x-hidden'>

        {loading && "Loading..."}
        <div className={`my-4 ${loading ? 'hidden':'block'}`}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='border w-full md:w-1/2 px-4 py-2 rounded-3xl outline-none text-black' placeholder='Search....' />
        </div>
        <table  className={`text-[#352E5B] ${loading ? 'hidden':'block'} ${theme && 'text-white'}`}>
            <tr>
                <th>Rank</th>
                <th>Cryptocoin</th>
                <th>Updated</th>
                <th>24H Change</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Market Cap</th>
            </tr>
            {
               coins && coins.filter(coin=> coin.name.toLowerCase().includes(input.toLowerCase())||coin.symbol.toLowerCase().includes(input.toLowerCase()) ).map((coin,index)=>(
                   
                    <tr key={coin.id} className='cursor-pointer' onClick={()=>{handleGetChart(coin.id)}}>
                    <td className='px-4 py-2 text-[10px] md:text-[14px]'>#{index+1}</td>
                    <td className='flex items-center gap-3 font-medium text-[10px] md:text-[14px] px-4 py-2 xl:w-[250px]'><img src={coin.image} alt={`Image of ${coin.name}`} className='size-[32px] object-contain' /> <span>{coin.name}</span></td>
                    <td className=' px-4 py-2 text-[10px] md:text-[14px]'>{coin.last_updated.slice(0,-5).slice(11,19)}</td>
                    <td className={` px-4 py-2 text-[10px] md:text-[14px]${coin.price_change_percentage_24h > 0 ? ' text-green-500':' text-red-500' }`}>{coin.price_change_percentage_24h> 0 && '+'}{coin.price_change_percentage_24h}%</td>
                    <td className=' px-4 py-2 text-[10px] md:text-[14px]'>&#36;{coin.current_price.toLocaleString()}</td>
                    <td className=' px-4 py-2 text-[10px] md:text-[14px]'>&#36;{coin.total_volume.toLocaleString()}</td>
                    <td className=' px-4 py-2 text-[10px] md:text-[14px]'>&#36;{coin.market_cap.toLocaleString()}</td>
                </tr>
               
               ))
            }
        </table>
        </div>
  )
}

export default GetCoins