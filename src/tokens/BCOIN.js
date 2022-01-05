import puppeteer from 'puppeteer';

export async function getPrice() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });

  const page = await browser.newPage();
  await page.goto('https://coinmarketcap.com/pt-br/currencies/bombcrypto/');

  const price = await page.$eval(
    '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > div > span',
    (el) => el.innerText
  );

  return price;
}

export async function getPriceShift() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://coinmarketcap.com/pt-br/currencies/bombcrypto/');

  const priceShift = await page.$eval(
    '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > span',
    (el) => el.innerText
  );

  return priceShift;
}
