import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  categorySortData,
  brandSortData,
  priceSortData,
  benefiSortData,
  typeSortData,
} from '../../@atom/productData';
export function Accordion() {
  // 초기화 상태 관리를 위해 reset State 생성
  const [reset, setReset] = useState(false);

  // 카테고리 데이터 불러오기
  const categoryData = useRecoilValue(categorySortData);
  // 브랜드 데이터 불러오기
  const brandData = useRecoilValue(brandSortData);
  // 가격 데이터 불러오기
  const priceData = useRecoilValue(priceSortData);
  // 혜택 데이터 불러오기
  const benefitData = useRecoilValue(benefiSortData);

  // 유형 데이터 불러오기
  const typeData = useRecoilValue(typeSortData);

  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter reset={reset} setReset={setReset} />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet data={categoryData} listName="카테고리" />
        <AccordionSet data={brandData} listName="브랜드" />
        <AccordionSet data={priceData} listName="가격" />
        <AccordionSet data={[benefitData]} listName="혜택" />
        <AccordionSet data={[typeData]} listName="유형" />
      </div>
    </div>
  );
}
