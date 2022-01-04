import axios from 'axios';

const currencyConverterAPI = axios.create({
  baseURL:
    'https://free.currconv.com/api/v7/convert?q=BRL_USD,BRL_EUR&compact=ultra&apiKey=270327f79dfab90b113c'
});

export default currencyConverterAPI;
