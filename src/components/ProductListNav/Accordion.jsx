import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';
import { useState } from 'react';
export function Accordion({ category_data, brand_data, price_data }) {
  // console.log(category_data);
  // console.log(price_data[0].map((a) => [a]));

  // 초기화 상태 관리를 위해 reset State 생성
  const [reset, setReset] = useState(false);

  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter reset={reset} setReset={setReset} />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet data={category_data} listName="카테고리" more="true" />
        <AccordionSet data={brand_data} listName="브랜드" more="true" />
        {/* <AccordionSet listName="가격" data={price_data[0].map((a) => [a])} /> */}
      </div>
    </div>
  );
}
