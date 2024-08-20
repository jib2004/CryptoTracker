import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets',
    params: {vs_currency: 'usd'},
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-HhCgDAc4Mx1MwyquLMtUpPgS'}
  };

export const fetchCoins = async() =>{
    try {
        const res = await axios.request(options)
        if(res.status === 200){
            return res.data
        }else{
            throw new Error('Not Found')
        }
    } catch (error) {
        console.error(error);
    }

  

}