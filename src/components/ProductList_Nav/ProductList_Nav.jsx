import { useEffect, useMemo } from 'react';
import { many_product_sort, name_sort } from '../../utils';
import styles from './ProductList_Nav.module.scss';

export function ProductList_Nav({ product }) {
  const category_sort_data = many_product_sort(product, 'category');
  console.log(category_sort_data);

  const brand_sort_data = name_sort(product, 'name_sort', 'brand');
  console.log(brand_sort_data);

  return <div>프로덕트 리스트 네비게이션</div>;
}

//default 파라메터 설정해주기
