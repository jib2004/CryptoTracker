import App from '../App'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import {Chart}  from 'react-google-charts'

const Charts = () => {
  let {id,day } = useParams()
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([[]])
  

const options = {
  method: 'GET',
  url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
  params: {vs_currency: 'usd', days: `${day}`},
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-HhCgDAc4Mx1MwyquLMtUpPgS'}
};


const fetchChatData = async() =>{
  setLoading(true)
  try {
    const res = await axios.request(options)
    setData(res.data.prices)
    setLoading(false)
  } catch (error) {
    console.error(error);
    setLoading(false)
  }

}
let chartData = [['Dates',"Prices"]]
  if(data){
    data.map(item=>{
        chartData.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
    }) 
   }


console.log(chartData)
useEffect(()=>{
  fetchChatData()

  
},[])

// console.log(dataValue)

  
  return (
    <App>
      {loading && "Loading..."}
      <div className={`my-4 w-screen h-screen xl:h-auto ${loading ? 'hidden':'block'}`}>
        <Chart
        chartType='LineChart'
        data={chartData}
        height={'100%'}
        width="100%"
        legendToggle
        />
      </div>
    </App>
  )
}

export default Charts