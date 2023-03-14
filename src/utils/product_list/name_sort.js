// 가나다 이름순으로 정렬해주는 함수, 한글이 영어보다 먼저 나오게 오름차순 정렬
// sort_kind 값에 따라 이름순 정렬인지 많은 상품순 정렬인지 if 문을 통해 설정
// 중복값들을 제거하고 중복개수를 포함하고 있는 객체로 정렬
// 그 후 객체를 한글이 영어보다 먼저오도록 해주는 korean_pre_sort 함수를 이용해서 정렬하고 배열에 넣어줌

import { many_product_sort, koream_pre_sort } from '@/utils';

export function name_sort(product, accordion_head) {
  const sort_data = product.map((product) => product[accordion_head]);
  const sort_data_fillter = {};
  sort_data.forEach((x) => {
    sort_data_fillter[x] = (sort_data_fillter[x] || 0) + 1;
  });

  let sortable_data = [];
  const sortable_data_object = koream_pre_sort(sort_data_fillter);
  for (let name in sortable_data_object) {
    sortable_data.push([name, sortable_data_object[name]]);
  }
  // console.log(sortable_data);
  return sortable_data;
}
