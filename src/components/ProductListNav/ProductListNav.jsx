import { useEffect, useMemo, useState } from 'react';
import { many_product_sort, name_sort } from '@/utils';
import { Accordion } from './Accordion';

export function ProductListNav({ product }) {
  // const [sortKind, setSortKind] = useState('name_sort');
  const category_sort_data = many_product_sort(product, 'category');
  // console.log(category_sort_data);

  const brand_name_sort_data = name_sort(product, 'brand');
  const brand_product_sort_data = many_product_sort(product, 'brand');
  // console.log(brand_product_sort_data);

  return (
    <>
      <Accordion
        category_data={[category_sort_data]}
        brand_data={[brand_name_sort_data, brand_product_sort_data]}
      />
    </>
  );
}

//default 파라메터 설정해주기
