import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';
import { useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  categorySortData,
  brandSortData,
  priceSortData,
  benefiSortData,
  typeSortData,
} from '@/@atom/productData';
import { selectList } from '@/@atom/accordion/selectList';
import { categorySelect } from '@/@atom/accordion/categorySelect';
import { productListCheckReset } from '../../@atom/accordion/productListCheckReset';

// import { accordionCategory } from '@/@atom/accordion/accordionCategory.js';
export function Accordion() {
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

  const checkResetBtn = useRecoilValue(productListCheckReset);

  const categorySelectData = useRef([]); //useState
  const brandSelectData = useRef([]);
  const priceSelectData = useRef([]);
  const benefitSelectData = useRef([]);
  const typeSelectData = useRef([]);

  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet
          data={categoryData}
          listName="카테고리"
          selectData={categorySelectData}
        />
        <AccordionSet
          data={brandData}
          listName="브랜드"
          selectData={brandSelectData}
        />
        <AccordionSet
          data={priceData}
          listName="가격"
          selectData={priceSelectData}
        />
        <AccordionSet
          data={[benefitData]}
          listName="혜택"
          selectData={benefitSelectData}
        />
        <AccordionSet
          data={[typeData]}
          listName="유형"
          selectData={typeSelectData}
        />
      </div>
    </div>
  );
}
