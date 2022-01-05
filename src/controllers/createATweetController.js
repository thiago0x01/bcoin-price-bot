import { TwitterClient } from 'twitter-api-client';
import currencyConverterAPI from '../configs/currencyConverterAPI.js';
import { getPrice, getPriceShift } from '../tokens/BCOIN.js';

async function createATweetController() {
  const brlPrice = await getPrice();
  const priceShift = await getPriceShift();
  const brlToUsdAndBrlToEur = await currencyConverterAPI.get('/');

  const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_CONSUMER_KEY,
    apiSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  try {
    await twitterClient.tweetsV2.createTweet({
      text: `I'm back`
    });
  } catch (error) {
    console.log(error);
  }
}

export default createATweetController;
