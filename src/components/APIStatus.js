import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/ping',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-HhCgDAc4Mx1MwyquLMtUpPgS'}
  };
  
  
export const fetchStatus = async()=>{
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  };
