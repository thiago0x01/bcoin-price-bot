import addOAuthInterceptor, { OAuthInterceptorConfig } from 'axios-oauth-1.0a';
import 'dotenv/config';
import twitterV2 from './configs/twitterV2';

async function Teste() {
  await twitterV2.post(
    '/tweets',
    {
      text: 'Twitter API test!'
    },
    {
      headers: {
        Authorization:
          'OAuth oauth_consumer_key="6KbiMPKUojkulX3rnyhpKJSEK",oauth_token="1467125132246327297-DUnIwhjggHYCWizuqFG3yObhCTEovg",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1641309498",oauth_nonce="DcfsPFZv0A9",oauth_version="1.0",oauth_signature="J%2F%2B4ZvRT36%2Frsi8%2BTQofhgOiTRI%3D"',
        'Content-Type': 'application/json'
      }
    }
  );
}

Teste();
