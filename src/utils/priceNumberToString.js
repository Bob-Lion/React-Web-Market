export function changePriceNumToString(price) {
  const priceStr =
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  return priceStr;
}

export function changeStringToPrice(str) {
  str = Number.parseInt(str.replace(/[^0-9]/g, ''));
  return str;
}
