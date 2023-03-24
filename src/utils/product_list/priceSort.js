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
  const first = ['7500원 미만', firstPrice.length];
  const second = ['7,500원 ~ 10,980원', secondPrice.length];
  const third = ['10,980 ~ 16,200원', thirdPrice.length];
  const fourth = ['16,200원 이상', fourthPrice.length];

  const priceSortDataState = [first, second, third, fourth];

  return priceSortDataState;
}
