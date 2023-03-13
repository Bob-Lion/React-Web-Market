import { useEffect, useMemo } from 'react';
import { many_product_sort, name_sort } from '@/utils';
import { Accordion } from './Accordion';
import styles from './ProductListNav.module.scss';
import { AccordionFillter } from './AccordionFillter';

export function ProductListNav({ product }) {
  const category_sort_data = many_product_sort(product, 'category');
  console.log(category_sort_data);

  const brand_sort_data = name_sort(product, 'name_sort', 'brand');
  console.log(brand_sort_data);

  return (
    <div>
      <AccordionFillter />
      <Accordion listName="카테고리" data={category_sort_data} />
      <Accordion listName="브랜드" data={brand_sort_data} />
    </div>
  );
}

//default 파라메터 설정해주기
