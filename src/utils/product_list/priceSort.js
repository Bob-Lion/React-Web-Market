export function priceSort(product) {
  const firstPrice = [];
  const secondPrice = [];
  const thirdPrice = [];
  const fourthPrice = [];

  [...product].map((item) => {
    if (item.salePrice < 7500) {
      firstPrice.push(item);
    } else if (item.salePrice >= 7500 && item.salePrice < 10980) {
      secondPrice.push(item);
    } else if (item.salePrice >= 10980 && item.salePrice < 16000) {
      thirdPrice.push(item);
    } else {
      fourthPrice.push(item);
    }
  });
  const priceSortData = [firstPrice, secondPrice, thirdPrice, fourthPrice];

  return priceSortData;
}
