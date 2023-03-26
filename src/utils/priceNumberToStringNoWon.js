export function changePriceNumToStringNoWon(price) {
  const priceStr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return priceStr;
}
