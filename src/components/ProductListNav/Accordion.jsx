import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';
export function Accordion({ category_data, brand_data }) {
  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet listName="카테고리" data={category_data} more="true" />
        <AccordionSet listName="브랜드" data={brand_data} more="true" />
      </div>
    </div>
  );
}
