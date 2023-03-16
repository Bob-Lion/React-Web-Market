import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  categorySortData,
  brandSortData,
  priceSortData,
  benefiSortData,
  typeSortData,
} from '@/@atom/productData';
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

  // const [categorySelectData, setCategorySelectData] = useRecoilState();
  const [categorySelectData, setCategorySelectData] = useState([]);
  const [brandSelectData, setBrandSelectData] = useState([]);
  const [priceSelectData, setPriceSelectData] = useState([]);
  const [benefitSelectData, setBenefitSelectData] = useState([]);
  const [typeSelectData, setTypeSelectData] = useState([]);

  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter
          categorySelectData={categorySelectData}
          setCategorySelectData={setCategorySelectData}
        />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet
          data={categoryData}
          listName="카테고리"
          selectData={categorySelectData}
          setSelectData={setCategorySelectData}
        />
        <AccordionSet
          data={brandData}
          listName="브랜드"
          selectData={brandSelectData}
          setSelectData={setBrandSelectData}
        />
        <AccordionSet
          data={priceData}
          listName="가격"
          selectData={priceSelectData}
          setSelectData={setPriceSelectData}
        />
        <AccordionSet
          data={[benefitData]}
          listName="혜택"
          selectData={benefitSelectData}
          setSelectData={setBenefitSelectData}
        />
        <AccordionSet
          data={[typeData]}
          listName="유형"
          selectData={typeSelectData}
          setSelectData={setTypeSelectData}
        />
      </div>
    </div>
  );
}
