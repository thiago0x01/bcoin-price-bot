import { ElementHandle } from 'puppeteer';

export function convertCurrency(
  parity: number,
  brlPrice: ElementHandle<string>
) {
  return (parity * parseFloat(brlPrice.toString().slice(2))).toFixed(2);
}
