import currencyConverterAPI from '../configs/currencyConverterAPI.js';
import twitterV2 from '../configs/twitterV2.js';
import { getPrice, getPriceShift } from '../tokens/BCOIN.js';
import { convertCurrency } from '../tools/index.js';

async function createATweetController() {
  const brlPrice = await getPrice();
  const priceShift = await getPriceShift();
  const brlToUsdAndBrlToEur = await currencyConverterAPI.get('/');

  try {
    await twitterV2.post(
      '/tweets',
      {
        text: `🇧🇷\nPreço de Bombcrypto (BCOIN): ${brlPrice}\nAlternância de Preço (24h): ${priceShift}\n\n🇺🇸\nBombcrypto Price (BCOIN): $${convertCurrency(
          brlToUsdAndBrlToEur.data.BRL_USD,
          brlPrice
        )}\nPrice Shift (24h): ${priceShift}\n\n🇪🇸\nPrecio de Bombcrypto (BCOIN): €${convertCurrency(
          brlToUsdAndBrlToEur.data.BRL_EUR,
          brlPrice
        )}\nCambio de precio (24h): ${priceShift}`
      },
      {
        headers: {
          Authorization: `OAuth oauth_consumer_key="${process.env.TWITTER_CONSUMER_KEY}",oauth_token="${process.env.TWITTER_ACCESS_TOKEN}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1641313593",oauth_nonce="pN9OPNFvMdF",oauth_version="1.0",oauth_signature="sIqmMRfXFVq%2BpuUMmG08z%2Bc0RwM%3D"`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export default createATweetController;
