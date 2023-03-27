import { useEffect, useMemo, useState } from 'react';
import { many_product_sort, name_sort, priceSort } from '@/utils';
import { Accordion } from './Accordion';
import { useRecoilValue } from 'recoil';
import { productDataState } from '@/@atom/productDataState';

export function ProductListNav({ data }) {
  if (!data) {
    console.log('데이터 없음');
  } else {
    console.log('데이터 있음');
    return (
      <>
        <Accordion data={data} />
      </>
    );
  }
}

//default 파라메터 설정해주기
