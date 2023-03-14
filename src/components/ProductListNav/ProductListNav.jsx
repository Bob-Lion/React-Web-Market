import { useEffect, useMemo, useState } from 'react';
import { many_product_sort, name_sort, priceSort } from '@/utils';
import { Accordion } from './Accordion';

export function ProductListNav({ product }) {
  // 카테고리에 들어갈 데이터 항목
  const category_sort_data = useMemo(
    () => many_product_sort(product, 'category'),
    [product]
  );
  // 브랜드에 들어갈 데이터 항목
  const brand_name_sort_data = useMemo(
    () => name_sort(product, 'brand'),
    [product]
  );
  const brand_product_sort_data = useMemo(
    () => many_product_sort(product, 'brand'),
    [product]
  );
  // 가격에 들어갈 데이터 항목
  const price_sort_data = priceSort(product);
  // 혜택에 들어갈 데이터 항목

  // 유형에 들어갈 데이터 항목

  // 특정상품 제외에 들어갈 데이터 항목

  return (
    <>
      <Accordion
        category_data={[category_sort_data]}
        brand_data={[brand_name_sort_data, brand_product_sort_data]}
        price_data={price_sort_data}
      />
    </>
  );
}

//default 파라메터 설정해주기
