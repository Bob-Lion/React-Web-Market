// 상품 많은 순 으로 정렬 해주는 함수
// product 정보를 가져오고 처음에 중복값을 제거 하면서 중복값 체크 -> 제거후 객체들의 props 들을 배열에 넣어서 중복값이 큰 순서대로 내림차순 정렬

export function many_product_sort(product, accordion_head) {
  const sort_data = product.map((product) => product[accordion_head]);
  // console.log(category);
  const sort_data_fillter = {};
  sort_data.forEach((x) => {
    sort_data_fillter[x] = (sort_data_fillter[x] || 0) + 1;
  });

  let sortable_data = [];
  for (let name in sort_data_fillter) {
    sortable_data.push([name, sort_data_fillter[name]]);
  }

  sortable_data.sort((a, b) => {
    return b[1] - a[1];
  });
  // console.log(sortable_category);
  return sortable_data;
}
