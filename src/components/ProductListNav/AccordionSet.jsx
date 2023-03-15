import arrow from '@/../public/ProductListImage/Arrow.svg';
import { AccordionList } from './AccordionList';
// import { BrandNameSort } from './BrandNameSort';
import styles from './ProductListNav.module.scss';
import { useEffect, useRef, useState } from 'react';
// 아코디언 목록 한 세트
export function AccordionSet({ data, listName }) {
  // listName === '가격' ? console.log(data) : console.log('');
  // console.log(data[0].slice(0, 10));
  // const sliceData = data.slice(0, 10);
  // console.log(sliceData);

  const [sortData, setSortData] = useState(data[0]);
  const [opacityToggle, setOpacityToggle] = useState(false);
  const nameSortBtn = useRef();
  const productSortBtn = useRef();
  const accordionList = useRef();
  const arrowReverse = useRef();
  // 상품 갯수가 n개 이상이면 더보기 버튼 생성
  const more = sortData.length >= 8;

  useEffect(() => {
    if (opacityToggle) {
      accordionList.current.style.opacity = '0';
      accordionList.current.style.maxHeight = '0px';
      arrowReverse.current.style.transform = 'rotate(0deg)';
    } else {
      accordionList.current.style.opacity = '1';
      accordionList.current.style.maxHeight = '100vh';
      arrowReverse.current.style.transform = 'rotate(-180deg)';
      arrowReverse.current.style.transition =
        'all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s';
    }
  });
  const handleChangeData = (sortName) => {
    // sort === 'name' ? setSortData(data[0]) : setSortData(data[1]);
    if (sortName === 'name') {
      setSortData(data[0]);
      nameSortBtn.current.style.color = 'rgb(209, 122, 1)';
      productSortBtn.current.style.color = 'rgb(51, 51, 51)';
    }
    if (sortName === 'product') {
      setSortData(data[1]);
      nameSortBtn.current.style.color = 'rgb(51, 51, 51)';
      productSortBtn.current.style.color = 'rgb(209, 122, 1)';
    }
  };

  const handleAccordionList = () => {
    if (opacityToggle) {
      accordionList.current.style.opacity = '0';
      accordionList.current.style.maxHeight = '0px';
      arrowReverse.current.style.transform = 'rotate(0deg)';
    } else {
      accordionList.current.style.opacity = '1';
      accordionList.current.style.maxHeight = '100vh';
      arrowReverse.current.style.transform = 'rotate(-180deg)';
      arrowReverse.current.style.transition =
        'all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s';
    }
    setOpacityToggle(!opacityToggle);
  };

  return (
    <div className={styles.accordionSet}>
      <button
        className={styles.accordionSetButton}
        onClick={handleAccordionList}
      >
        <span className={styles.accordionSetButtonText}>{listName}</span>
        <span>
          <img
            src={arrow}
            alt="해당 아코디언 목록 펼치고 닫는 화살표"
            ref={arrowReverse}
          />
        </span>
      </button>
      <ul className={styles.accordionSetBody} ref={accordionList}>
        {listName === '브랜드' ? (
          <div className={styles.accordionSetBodySort}>
            {/* <BrandNameSort className={styles.accordionSetBodySortName}  ref={nameSortBtn} onClick={handleChangeData('name')}>가나다순</BrandNameSort> */}
            <button
              className={styles.accordionSetBodySortName}
              ref={nameSortBtn}
              onClick={() => {
                handleChangeData('name');
              }}
            >
              가나다순
            </button>
            <button
              className={styles.accordionSetBodySortProduct}
              ref={productSortBtn}
              onClick={() => {
                handleChangeData('product');
              }}
            >
              상품 많은순
            </button>
          </div>
        ) : null}
        {sortData.slice(0, 10).map((item) => {
          return <AccordionList key={item[0]} name={item[0]} count={item[1]} />;
        })}
        {/* 리스트 아이템의 수가 10개 이상일때 more 값이 true 로 받아질때만 생성 */}
        {more ? (
          <button className={styles.accordionSetMore}>
            <span>{listName} 더보기</span>
            <img
              className={styles.accordionSetMoreImg}
              src={arrow}
              alt="해당 리스트 더보기 화살표 버튼"
            />
          </button>
        ) : null}
      </ul>
    </div>
  );
}
