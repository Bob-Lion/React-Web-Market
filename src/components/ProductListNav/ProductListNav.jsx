import { useEffect, useMemo, useState } from 'react';
import { many_product_sort, name_sort, priceSort } from '@/utils';
import { Accordion } from './Accordion';
import { useRecoilValue } from 'recoil';
import { productDataState } from '@/@atom/productDataState';

export function ProductListNav() {
  return (
    <>
      <Accordion />
    </>
  );
}

//default 파라메터 설정해주기
