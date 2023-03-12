// product list 페이지에서 카테고리 정렬해주는 함수
// product 정보를 가져오고 처음에 중복값을 제거 하면서 중복값 체크 -> 제거후 객체들의 props 들을 배열에 넣어서 중복값이 큰 순서대로 내림차순 정렬

export function category_sort(product) {
  const category = product.map((product) => product.category);
  // console.log(category);
  const category_fillter = {};
  category.forEach((x) => {
    category_fillter[x] = (category_fillter[x] || 0) + 1;
  });
  // console.log(category_fillter);

  var sortable_category = [];
  for (var name in category_fillter) {
    sortable_category.push([name, category_fillter[name]]);
  }

  sortable_category.sort((a, b) => {
    return b[1] - a[1];
  });
  // console.log(sortable_category);
  return sortable_category;
}
