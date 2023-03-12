import { useEffect, useMemo } from 'react';
import { category_sort } from '../utils';
import styled from './ProductList_Nav.module.scss';

export function ProductList_Nav({ product }) {
  const category_sort_data = category_sort(product);
  console.log(category_sort_data);

  return <div>프로덕트 리스트 네비게이션</div>;
}
