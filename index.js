import { CronJob } from 'cron';
import 'dotenv/config';
import createATweet from './createATweet.js';

const job = new CronJob('0 */30 9-23 * * *', async () => {
  await createATweet();

  console.log('Prices tweeted at', new Date());
});

createATweet();

job.start();
