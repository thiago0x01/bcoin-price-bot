import axios from 'axios';
import { TwitterClient } from 'twitter-api-client';
import { getPrice, getPriceShift } from '../tokens/BCOIN.js';
import { convertCurrency } from '../tools/index.js';

async function createATweetController() {
  const brlPrice = await getPrice();
  const priceShift = await getPriceShift();
  const brlToUsdAndBrlToEur = await axios.get(
    'https://free.currconv.com/api/v7/convert?q=BRL_USD,BRL_EUR&compact=ultra&apiKey=270327f79dfab90b113c'
  );

  const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_CONSUMER_KEY,
    apiSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  try {
    await twitterClient.tweetsV2.createTweet({
      text: `🇧🇷\nPreço de Bombcrypto (BCOIN): ${brlPrice}\nAlternância de Preço (24h): ${priceShift}\n\n🇺🇸\nBombcrypto Price (BCOIN): $${convertCurrency(
        brlToUsdAndBrlToEur.data.BRL_USD,
        brlPrice
      )}\nPrice Shift (24h): ${priceShift}\n\n🇪🇸\nPrecio de Bombcrypto (BCOIN): €${convertCurrency(
        brlToUsdAndBrlToEur.data.BRL_EUR,
        brlPrice
      )}\nCambio de precio (24h): ${priceShift}`
    });
  } catch (error) {
    console.log(error);
  }
}

export default createATweetController;
