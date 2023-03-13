import { useEffect, useMemo } from 'react';
import { many_product_sort, name_sort } from '@/utils';
import { Accordion } from './Accordion';

export function ProductListNav({ product }) {
  const category_sort_data = many_product_sort(product, 'category');
  console.log(category_sort_data);

  const brand_sort_data = name_sort(product, 'name_sort', 'brand');
  console.log(brand_sort_data);

  return (
    <>
      <Accordion
        category_data={category_sort_data}
        brand_data={brand_sort_data}
      />
    </>
  );
}

//default 파라메터 설정해주기
