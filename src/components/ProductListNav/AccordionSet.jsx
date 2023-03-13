import arrow from '@/../public/ProductListImage/Arrow.svg';
import { AccordionList } from './AccordionList';
import leftarrow from '@/../public/ProductListImage/Arrow.svg';
import styles from './ProductListNav.module.scss';
// 아코디언 목록 한 세트
export function AccordionSet({ data, listName }) {
  return (
    <div className={styles.accordionSet}>
      <button className={styles.accordionSetButton}>
        <span className={styles.accordionSetButtonText}>{listName}</span>
        <span>
          <img src={arrow} alt="해당 아코디언 목록 펼치고 닫는 화살표" />
        </span>
      </button>
      <ul className={styles.accordionSetBody}>
        {data.map((item) => {
          return <AccordionList key={item[0]} name={item[0]} count={item[1]} />;
        })}
      </ul>
      <button>
        <span>{listName} 더보기</span>
        <img src={leftarrow} alt="해당 리스트 더보기 화살표 버튼" />
      </button>
    </div>
  );
}
