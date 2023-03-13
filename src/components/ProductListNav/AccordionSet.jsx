import arrow from '@/../public/ProductListImage/Arrow.svg';
import { AccordionList } from './AccordionList';
import leftarrow from '@/../public/ProductListImage/Arrow.svg';
import styles from './ProductListNav.module.scss';
import { useRef, useState } from 'react';
// 아코디언 목록 한 세트
export function AccordionSet({ data, listName, more }) {
  // console.log(data.length);
  const [sortData, setSortData] = useState(data[0]);
  const nameSortBtn = useRef();
  const productSortBtn = useRef();
  const changeData = (sort) => {
    // sort === 'name' ? setSortData(data[0]) : setSortData(data[1]);
    if (sort === 'name') {
      setSortData(data[0]);
      // nameSortBtn.current.
    }
    if (sort === 'product') {
      setSortData(data[1]);
    }
  };

  return (
    <div className={styles.accordionSet}>
      <button className={styles.accordionSetButton}>
        <span className={styles.accordionSetButtonText}>{listName}</span>
        <span>
          <img src={arrow} alt="해당 아코디언 목록 펼치고 닫는 화살표" />
        </span>
      </button>
      <ul className={styles.accordionSetBody}>
        {listName === '브랜드' ? (
          <div className={styles.accordionSetBodySort}>
            <button
              className={styles.accordionSetBodySortName}
              ref={nameSortBtn}
              onClick={() => {
                changeData('name');
              }}
            >
              가나다순
            </button>
            <button
              className={styles.accordionSetBodySortProduct}
              ref={productSortBtn}
              onClick={() => {
                changeData('product');
              }}
            >
              상품 많은순
            </button>
          </div>
        ) : null}
        {sortData.map((item) => {
          return <AccordionList key={item[0]} name={item[0]} count={item[1]} />;
        })}
      </ul>
      {/* 리스트 아이템의 수가 10개 이상일때 more 값이 true 로 받아질때만 생성 */}
      {more ? (
        <button className={styles.accordionSetMore}>
          <span>{listName} 더보기</span>
          <img
            className={styles.accordionSetMoreImg}
            src={leftarrow}
            alt="해당 리스트 더보기 화살표 버튼"
          />
        </button>
      ) : null}
    </div>
  );
}
