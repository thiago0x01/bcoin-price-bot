import createATweetController from './src/controllers/createATweetController.js';
import { CronJob } from 'cron';
import 'dotenv/config';

const job = new CronJob('0 */30 9-23 * * *', async () => {
  await createATweetController();

  console.log('Prices tweeted at', new Date());
});

job.start();
