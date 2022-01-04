import axios from 'axios';

const twitterV2 = axios.create({
  baseURL: 'https://api.twitter.com/2'
});

export default twitterV2;
