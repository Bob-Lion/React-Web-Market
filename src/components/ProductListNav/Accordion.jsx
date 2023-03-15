import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  brandNameSortData,
  categorySortData,
  brandProductSortData,
  brandSortData,
} from '../../@atom/productData';
export function Accordion() {
  // console.log(category_data);
  // console.log(price_data[0].map((a) => [a]));

  // 초기화 상태 관리를 위해 reset State 생성
  const [reset, setReset] = useState(false);

  // 카테고리 데이터 불러오기
  const categoryData = useRecoilValue(categorySortData);
  // // 브랜드 이름순 정렬 데이터 불러오기
  // const brandNameData = useRecoilValue(brandNameSortData);
  // // 브랜드 상품 많은순 정렬 데이터 불러오기
  // const brandProductData = useRecoilValue(brandProductSortData);
  // 브랜드 정렬 데이터 불러오기
  const brandData = useRecoilValue(brandSortData);

  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter reset={reset} setReset={setReset} />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet listName="카테고리" data={categoryData} />
        <AccordionSet listName="브랜드" data={brandData} />
        {/* <AccordionSet listName="가격" data={price_data[0].map((a) => [a])} /> */}
      </div>
    </div>
  );
}
