import axios from 'axios';
import { TwitterClient } from 'twitter-api-client';

async function createATweet() {
  const brlPrice = await axios.post(
    'https://api.livecoinwatch.com/coins/single',
    {
      currency: 'BRL',
      code: 'BCOIN'
    },
    {
      headers: {
        'x-api-key': process.env.LIVECOINWATCH_API_KEY
      }
    }
  );

  const usdPrice = await axios.post(
    'https://api.livecoinwatch.com/coins/single',
    {
      currency: 'USD',
      code: 'BCOIN'
    },
    {
      headers: {
        'x-api-key': process.env.LIVECOINWATCH_API_KEY
      }
    }
  );

  const eurPrice = await axios.post(
    'https://api.livecoinwatch.com/coins/single',
    {
      currency: 'EUR',
      code: 'BCOIN'
    },
    {
      headers: {
        'x-api-key': process.env.LIVECOINWATCH_API_KEY
      }
    }
  );

  const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_CONSUMER_KEY,
    apiSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  try {
    await twitterClient.tweetsV2.createTweet({
      text: `🇧🇷\nPreço de Bombcrypto (BCOIN): R$${brlPrice.data.rate.toFixed(
        2
      )}\n\n🇺🇸\nBombcrypto Price (BCOIN): $${usdPrice.data.rate.toFixed(
        2
      )}\n\n🇪🇸\nPrecio de Bombcrypto (BCOIN): €${eurPrice.data.rate.toFixed(2)}`
    });
  } catch (error) {
    console.log(error);
  }
}

export default createATweet;
