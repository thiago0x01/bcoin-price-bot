export function convertCurrency(
  parity,
  brlPrice
) {
  return (parity * parseFloat(brlPrice.toString().slice(2))).toFixed(2);
}
